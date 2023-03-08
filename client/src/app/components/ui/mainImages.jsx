import React from "react";
import config from "../../config.json";

const MainImages = () => {
    return (
        <img
            src={config.apiEndpoint + "bg/mnogo_mebeli_fon.jfif"}
            alt="logo"
            height="450px"
        />
    );
};

export default MainImages;
