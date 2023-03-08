import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFurniture } from "../../store/furniture";
import config from "../../config.json";

const CategoryUnderItem = () => {
    const furniture = useSelector(getFurniture());
    const handlerScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    };
    return (
        <>
            <h2 className="mb-1 ms-4">Популярные товары</h2>
            <div className="d-flex flex-wrap justify-content-around mt-4">
                {furniture.map((item) => (
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
                            to={`/katalog/${item.category_product}/${item.product_name}`}
                            onClick={handlerScrollUp}
                        >
                            <img
                                src={config.imgSource + item.product_image}
                                style={{ width: "100%", height: "230px" }}
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
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryUnderItem;
