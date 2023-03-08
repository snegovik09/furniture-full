import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList
} from "../../../store/users";
import { getFurniture, loadFurnitureList } from "../../../store/furniture";

const AppLoader = ({ children }) => {
    const furniture = useSelector(getFurniture());
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch(loadFurnitureList());
    }, []);
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (usersStatusLoading && !furniture) return "loading";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
