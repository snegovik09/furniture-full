import React from "react";
import DiscountFurn from "../components/ui/discountFurn";
import MainImages from "../components/ui/mainImages";
import PopularFurn from "../components/ui/popularFurn";

const MainPage = () => {
    return (
        <div className="d-flex flex-column offset-2">
            <MainImages />
            <DiscountFurn />
            <PopularFurn />
        </div>
    );
};

export default MainPage;
