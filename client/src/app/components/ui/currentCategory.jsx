import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFurnitureLoadingStatus } from "../../store/furniture";
import { getCurrentUserData } from "../../store/users";
import { arrCatalog, rusArrCatalog } from "./links";
import Pagination from "../common/pagination";
import Breadcrumb from "../common/breadCrumb";
import { useBasket } from "../../hooks/useBasket";
import config from "../../config.json";

const CurrentCategory = ({ value }) => {
    const user = useSelector(getCurrentUserData());
    const furnitureLoading = useSelector(getFurnitureLoadingStatus());
    const [currentPage, setCurrentPage] = useState(1);
    const { currentCategory } = useParams();
    const { pushInArrayBasket } = useBasket();
    if (!value && furnitureLoading) {
        return (
            <div className="offset-2 h3 d-flex justify-content-center my-5">
                Loading...
            </div>
        );
    } else {
        const categoryIndex = arrCatalog.findIndex(
            (item) => item === currentCategory
        );

        const count = value.length;
        const pageSize = 4;

        const handlePageChange = (page) => {
            setCurrentPage(page);
        };
        const paginate = (items, pageNumber, pageSize) => {
            const startIndex = (pageNumber - 1) * pageSize;
            return [...items].splice(startIndex, pageSize);
        };
        const arrCrop = paginate(value, currentPage, pageSize);
        const handleClick = (item) => {
            pushInArrayBasket(item);
        };

        return (
            <div className="d-flex">
                <div className="d-flex flex-column offset-2 col-10 p-3">
                    <Breadcrumb />
                    <div className="d-flex align-items-center">
                        <h2 className="me-4">{rusArrCatalog[categoryIndex]}</h2>
                        {user && user.type === "admin" && (
                            <Link to="/product-change">
                                <button className="btn btn-primary">
                                    Добавить
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className="d-flex flex-wrap justify-content-around mt-4">
                        {arrCrop.map((item) => (
                            <div
                                key={item.id_product}
                                className="card mb-4"
                                style={{ width: "300px" }}
                            >
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }}
                                    to={`/katalog/${currentCategory}/${item.product_name}`}
                                >
                                    <img
                                        src={
                                            config.apiEndpoint +
                                            item.product_image
                                        }
                                        style={{
                                            width: "100%",
                                            height: "200px"
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.product_name}
                                        </h5>
                                        <p className="card-text">
                                            Описание данной единицы мебели
                                        </p>
                                    </div>
                                </Link>
                                <hr />
                                <div className="d-flex ps-3">
                                    <div>Цена</div>
                                    <div className="ps-5">
                                        <div>
                                            <s>{item.past_price}</s>
                                        </div>
                                        <h4>{item.present_price}</h4>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-success w-75 my-2 mx-auto"
                                    onClick={() => handleClick(item)}
                                >
                                    в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
};

export default CurrentCategory;
