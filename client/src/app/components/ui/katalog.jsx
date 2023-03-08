import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadCrumb";
import config from "../../config.json";

const Katalog = () => {
    return (
        <div className=" offset-2 col-10 p-3">
            <Breadcrumb />
            <div className="h2">Категории мебели</div>
            <div className="d-flex flex-wrap justify-content-around mt-4">
                <Link to={`/katalog/bedrooms`}>
                    <div style={{ position: "relative" }}>
                        <img
                            src={
                                config.apiEndpoint +
                                "katalog/157996403273390832_289279.jpg"
                            }
                            className=" text-warning text-center me-2 mb-2"
                            style={{ width: "450px", height: "300px" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "25px",
                                left: "160px",
                                color: "white",
                                fontSize: "30px"
                            }}
                        >
                            Спальни
                        </div>
                    </div>
                </Link>
                <div style={{ position: "relative" }}>
                    <Link to={`/katalog/livingRooms`}>
                        <img
                            src={
                                config.apiEndpoint +
                                "katalog/disayn-spalni-v-art-deko-stile-3638-40.jpg"
                            }
                            className="text-warning text-center me-2 mb-2"
                            style={{ width: "450px", height: "300px" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "25px",
                                left: "145px",
                                color: "white",
                                fontSize: "30px"
                            }}
                        >
                            Гостиные
                        </div>
                    </Link>
                </div>
                <div style={{ position: "relative" }}>
                    <Link to={`/katalog/cushionedFurniture`}>
                        <img
                            src={
                                config.apiEndpoint +
                                "katalog/dizayn-interyera-v-3-komnatnoi-kvartire-144-kv-m-foto-23-3719.jpg"
                            }
                            className="text-warning text-center me-2 mb-2"
                            style={{ width: "450px", height: "300px" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "25px",
                                left: "120px",
                                color: "white",
                                fontSize: "30px"
                            }}
                        >
                            Мягкая Мебель
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Katalog;
