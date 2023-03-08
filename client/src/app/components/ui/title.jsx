import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, getIsLoggedIn } from "../../store/users";
import { useBasket } from "../../hooks/useBasket";

const Title = () => {
    const currentUser = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const { counter } = useBasket();
    return (
        <div className="bgTitle">
            <div
                className="offset-2 col-10 px-3"
                style={{ position: "relative" }}
            >
                <div
                    className="d-flex align-items-center justify-content-between mb-5"
                    style={{ paddingTop: "5px" }}
                >
                    <div className="fst-italic h5 m-0">8-999-888-77-66</div>
                    <Link
                        to="/katalog"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px"
                        }}
                    >
                        Продукция
                    </Link>
                    <Link
                        to="#"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px"
                        }}
                    >
                        Информация
                    </Link>
                    <Link
                        to="#"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px"
                        }}
                    >
                        Доставка и оплата
                    </Link>

                    {currentUser && currentUser.type === "admin" && (
                        <Link
                            to="/edit"
                            style={{
                                color: "black",
                                fontSize: "16px",
                                textDecoration: "none"
                            }}
                        >
                            Редактировать
                        </Link>
                    )}
                    {isLoggedIn && currentUser ? (
                        <Link
                            to="/profile"
                            style={{
                                color: "black",
                                fontSize: "18px",
                                paddingBottom: "8px"
                            }}
                        >
                            {currentUser.name}
                        </Link>
                    ) : (
                        <Link
                            aria-current="page"
                            to="/login"
                            style={{
                                textDecoration: "none",
                                paddingBottom: "8px"
                            }}
                        >
                            Login
                        </Link>
                    )}
                </div>

                <div
                    className="d-flex col-2 justify-content-around align-items-center"
                    style={{
                        position: "fixed",
                        zIndex: "10",
                        top: "50px",
                        right: "-100px"
                    }}
                >
                    <Link
                        to="/oformlenie-zakaza"
                        style={{
                            color: "inherit",
                            position: "relative",
                            zIndex: "1",
                            left: "-10px",
                            top: "5px"
                        }}
                        className="h1"
                    >
                        <img
                            src={
                                process.env.REACT_APP_API_URL +
                                "basket/icons8.png"
                            }
                            alt="basket"
                        />
                        <span
                            style={{
                                width: "30px",
                                height: "30px",
                                position: "absolute",
                                top: "-5px",
                                left: "40px",
                                borderRadius: "50%",
                                background: "green",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                zIndex: "-1"
                            }}
                            className="h6"
                        >
                            {counter}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Title;
