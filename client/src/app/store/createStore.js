import commentsReducer from "./comments";
import usersReducer from "./users";
import furnitureReducer from "./furniture";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    furniture: furnitureReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
