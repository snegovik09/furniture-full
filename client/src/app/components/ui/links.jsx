import React from "react";
import { Link } from "react-router-dom";
export const arrCatalog = ["bedrooms", "livingRooms", "cushionedFurniture"];
export const rusArrCatalog = ["Спальни", "Гостиные", "Мягкая Мебель"];

const Links = () => {
    return arrCatalog.map((item, i) => (
        <li key={i} className="nav-item mb-2">
            <Link
                to={`/katalog/${item}`}
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}
            >
                <button
                    type="button"
                    className="btn btn-outline-info d-flex w-100"
                    style={{
                        fontSize: "16px"
                    }}
                >
                    {rusArrCatalog[i]}
                </button>
            </Link>
        </li>
    ));
};

export default Links;
