import React from "react";
import { Link, useHistory } from "react-router-dom";

const Breadcrumb = ({ element }) => {
    const history = useHistory();
    const nav = history.location.pathname;
    const navArr = nav.slice(1).split("/");
    const currentCategory = (value) => {
        if (value === "bedrooms") {
            return "/katalog/bedrooms";
        } else if (value === "livingRooms") {
            return "/katalog/livingRooms";
        } else if (value === "cushionedFurniture") {
            return "/katalog/cushionedFurniture";
        }
    };

    const func = () => {
        if (navArr.length === 1) {
            return (
                <li className="breadcrumb-item">
                    <Link
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={"/katalog"}
                    >
                        Каталог
                    </Link>
                </li>
            );
        }
        if (navArr.length === 2) {
            return (
                <>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={"/katalog"}>Каталог</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        Категория
                    </li>
                </>
            );
        } else if (navArr.length === 3) {
            return (
                <>
                    <li className="breadcrumb-item ">
                        <Link to={"/katalog"}>Каталог</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={currentCategory(navArr[1])}>Категория</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        {element.product_name_rus}
                    </li>
                </>
            );
        }
    };
    return (
        <nav aria-label="breadcrumb">
            <ol
                className="breadcrumb"
                style={{
                    fontSize: "14px"
                }}
            >
                <li className="breadcrumb-item active" aria-current="page">
                    {<Link to={`/`}>Главная страница</Link>}
                </li>
                {func()}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
