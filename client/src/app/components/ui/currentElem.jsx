import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    deleteFurniture,
    editFurniture,
    getFurnitureByName,
    getFurnitureLoadingStatus
} from "../../store/furniture";
import { getCurrentUserData } from "../../store/users";
import CategoryUnderItem from "./categoryUnderItem";
import Comments from "./comments";
import DescriptionCurrElem from "./descriptionCurrElem";
import Breadcrumb from "../common/breadCrumb";
import { useBasket } from "../../hooks/useBasket";
import config from "../../config.json";

const CurrentElem = () => {
    const dispatch = useDispatch();
    const user = useSelector(getCurrentUserData());
    const { currentElement, currentCategory } = useParams();
    const loading = useSelector(getFurnitureLoadingStatus());
    const { pushInArrayBasket } = useBasket();
    const furnitureByName = useSelector(getFurnitureByName(currentElement));
    const back = `/katalog/${currentCategory}`;
    const handleDelete = (userId) => {
        dispatch(deleteFurniture(userId, back));
    };
    const handleClickBasket = (item) => {
        pushInArrayBasket(item);
    };
    if (currentElement && !loading) {
        return (
            <div className="d-flex flex-column offset-2 col-10 p-3">
                <Breadcrumb element={furnitureByName} />
                <div className="d-flex mb-4 align-items-center">
                    <h2 className="me-3">{furnitureByName.product_name_rus}</h2>
                    {user && user.type === "admin" && (
                        <div>
                            <button
                                onClick={() =>
                                    handleDelete(furnitureByName._id, back)
                                }
                                className="btn btn-danger"
                                style={{ height: "50px" }}
                            >
                                Удалить
                            </button>
                            <Link
                                to={`/katalog/${currentCategory}/${furnitureByName.product_name}/editElem`}
                            >
                                <button
                                    className="btn btn-warning mx-3"
                                    style={{ height: "50px" }}
                                >
                                    Изменить
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-around">
                    {
                        <img
                            src={
                                config.apiEndpoint +
                                furnitureByName.product_image
                            }
                            style={{
                                width: "600px",
                                height: "350px"
                            }}
                        />
                    }
                    <div className="d-flex flex-column  align-items-center">
                        <DescriptionCurrElem />
                        <button
                            className="btn btn-success my-2"
                            onClick={() => handleClickBasket(furnitureByName)}
                            style={{ height: "50px", width: "150px" }}
                        >
                            в корзину
                        </button>
                    </div>
                </div>

                {/* <Comments /> */}
                <hr />
                <CategoryUnderItem />
            </div>
        );
    } else return "loading...";
};

export default CurrentElem;
