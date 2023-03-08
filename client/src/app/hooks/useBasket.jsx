import React, { useContext, useState } from "react";

const BasketContext = React.createContext();

export const useBasket = () => {
    return useContext(BasketContext);
};

export const BasketProviders = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [arrayBasket, setArrayBasket] = useState([]);
    const pushInArrayBasket = (item) => {
        setArrayBasket((prevState) => [...prevState, item]);
        setCounter((prevState) => prevState + 1);
        return arrayBasket;
    };
    const deleteArrayOfBasket = (id) => {
        setArrayBasket(
            (prevState) => (prevState = prevState.filter((u, i) => i !== id))
        );
        setCounter((prevState) => prevState - 1);
        return arrayBasket;
    };
    return (
        <BasketContext.Provider
            value={{
                counter,
                setCounter,
                arrayBasket,
                pushInArrayBasket,
                deleteArrayOfBasket
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};
