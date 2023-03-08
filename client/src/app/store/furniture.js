import { createSlice } from "@reduxjs/toolkit";
import furnitureService from "../services/furniture.service";
import isOutdated from "../utils/isOutdated";
import history from "../utils/history";

const furnitureSlice = createSlice({
    name: "furniture",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        furnitureRequested: (state) => {
            state.isLoading = true;
        },
        furnitureReceved: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        furnitureRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        furnitureAdd: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        furnitureDelete: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
            state.isLoading = false;
        },
        furnSearch: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        furnitureEdit: (state, action) => {
            const index = state.entities.findIndex(
                (u) => u._id === action.payload._id
            );
            state.entities[index] = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: furnitureReducer, actions } = furnitureSlice;
const {
    furnitureRequested,
    furnitureReceved,
    furnitureRequestFiled,
    furnitureAdd,
    furnitureDelete,
    furnSearch,
    furnitureEdit
} = actions;

export const loadFurnitureList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().furniture;
    if (isOutdated(lastFetch)) {
        dispatch(furnitureRequested());
        try {
            const { data } = await furnitureService.get();
            dispatch(furnitureReceved(data));
        } catch (error) {
            dispatch(furnitureRequestFiled(error.message));
        }
    }
};
export const loadFurnitureListAdmin = () => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.get();
        await dispatch(furnitureReceved(data));
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const addFurniture = (payload) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.create(payload);
        await dispatch(furnitureAdd(data));
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const deleteFurniture = (uniId, redirect) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.delete(uniId);
        if (!data) {
            await dispatch(furnitureDelete(data));
            dispatch(loadFurnitureListAdmin());
            history.push(redirect);
        }
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const editFurniture = (elem, id) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.edit(elem, id);
        await dispatch(furnitureEdit(data));
        dispatch(loadFurnitureListAdmin());
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const searchFurn = (value) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.getCurrentFurn(value);
        dispatch(furnSearch(data));
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const getFurniture = () => (state) => {
    return state.furniture.entities;
};

export const getFurnitureByCategory = (value) => (state) => {
    if (state.furniture.entities) {
        return state.furniture.entities.filter(
            (u) => u.category_product === value
        );
    }
};

export const getFurnitureLoadingStatus = () => (state) =>
    state.furniture.isLoading;
export const getFurnitureByName = (product_name) => (state) => {
    if (state.furniture.entities) {
        return state.furniture.entities.find(
            (p) => p.product_name === product_name
        );
    }
};
export const getFurnitureById = (id) => (state) => {
    if (state.furniture.entities) {
        return state.furniture.entities.find((u) => u._id === id);
    }
};
export default furnitureReducer;
