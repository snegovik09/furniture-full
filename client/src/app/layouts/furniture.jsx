import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFurnitureByCategory } from "../store/furniture";
import CurrentCategory from "../components/ui/currentCategory";
import CurrentElem from "../components/ui/currentElem";
import Katalog from "../components/ui/katalog";
const Furniture = () => {
    const { currentCategory, currentElement } = useParams();
    const valueBedrooms = useSelector(getFurnitureByCategory("bedrooms"));
    const valueLivingRooms = useSelector(getFurnitureByCategory("livingRooms"));
    const valueCushionedFurniture = useSelector(
        getFurnitureByCategory("cushionedFurniture")
    );
    const chooseCategory = () => {
        if (currentCategory === "bedrooms") {
            return valueBedrooms;
        } else if (currentCategory === "livingRooms") {
            return valueLivingRooms;
        } else if (currentCategory === "cushionedFurniture") {
            return valueCushionedFurniture;
        }
    };
    return (
        <>
            {currentElement ? (
                <CurrentElem />
            ) : currentCategory ? (
                <CurrentCategory value={chooseCategory()} />
            ) : (
                <Katalog />
            )}
        </>
    );
};

export default Furniture;
