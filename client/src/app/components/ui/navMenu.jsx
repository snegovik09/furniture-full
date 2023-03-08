import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchFurn } from "../../store/furniture";
import Links from "./links";

const NavMenu = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.searchFurn.value.trim();
        let trueValue;
        if (value) {
            trueValue = value[0].toUpperCase() + value.slice(1).toLowerCase();
        }
        dispatch(searchFurn(trueValue));
    };
    return (
        <aside className="position-fixed bg-white p-3 col-2 h-100">
            <div className="h6 mb-5">Город Черкесск</div>
            <div className="mb-2">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "22px",
                        fontStyle: "italic"
                    }}
                >
                    Магазин мебельный
                </Link>
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2 mb-2"
                    type="search"
                    name="searchFurn"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success my-sm-0">
                    Поиск
                </button>
            </form>
            <ul className="nav flex-column mt-3">
                <Links />
            </ul>
        </aside>
    );
};

export default NavMenu;
