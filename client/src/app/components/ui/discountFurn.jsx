import React from "react";
import config from "../../config.json";

const DiscountFurn = () => {
    return (
        <>
            <div className="mt-3 ms-4 fw-bolder fs-2 text-danger">
                Товары со скидкой
            </div>
            <div className="d-flex justify-content-around my-3">
                <img
                    src={config.imgSource + "bg/divan.jpg"}
                    alt="logo"
                    width="250px"
                />
                <img
                    src={config.imgSource + "bg/Benedikt-_7_.jpg"}
                    alt="logo"
                    width="250px"
                />
                <img
                    src={
                        config.imgSource +
                        "bg/xe7a3d21333c240472bfa7b58cf5893b3.jpg,q1639019470.pagespeed.ic.r8wxpHt9Mq.jpg"
                    }
                    alt="logo"
                    width="250px"
                />
                <img
                    src={
                        config.imgSource +
                        "bg/shkaf-kupe-shkp-1-dub-venge-yasen-ankor-svetlyj-prosto-horoshaya-sv-mebel.jpg"
                    }
                    alt="logo"
                    width="250px"
                />
                <img
                    src={config.imgSource + "bg/756485832733198.jpg"}
                    alt="logo"
                    width="250px"
                />
            </div>
        </>
    );
};

export default DiscountFurn;
