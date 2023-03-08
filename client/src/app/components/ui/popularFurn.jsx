import React from "react";
import config from "../../config.json";
const PopularFurn = () => {
    return (
        <div className="d-flex flex-column">
            <div className="h2 fw-blue fw-bold text-primary mb-3 ms-4">
                Хиты продаж
            </div>
            <div
                className="d-flex justify-content-around"
                style={{ height: "700px" }}
            >
                <div className="d-flex flex-column">
                    {
                        <img
                            src={
                                config.imgSource +
                                "bg/x12a571a844cf18f36583332e372f6f44.jpg.pagespeed.ic.hxMJ7jWQ4Q.jpg"
                            }
                            height="300px"
                            alt="img1"
                            className="align-self-start mb-2"
                            width="500px"
                        />
                    }
                    {
                        <img
                            src={
                                config.imgSource +
                                "bg/kuhnya_briz_2.0_m_mdf_beliy_soft_lavanda.jpg"
                            }
                            height="300px"
                            alt="img1"
                            className="align-self-end mb-2"
                            width="500px"
                        />
                    }
                </div>
                {
                    <img
                        src={config.imgSource + "bg/1-2.jpg"}
                        height="608px"
                        width="800px"
                        alt="img3"
                        className="mx-2 "
                    />
                }
            </div>
        </div>
    );
};

export default PopularFurn;
