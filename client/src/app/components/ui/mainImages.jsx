import React from "react";

const MainImages = () => {
    return (
        <img
            src={process.env.REACT_APP_API_URL + "bg/mnogo_mebeli_fon.jfif"}
            alt="logo"
            height="450px"
        />
    );
};

export default MainImages;
