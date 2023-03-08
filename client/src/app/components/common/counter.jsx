import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../../hooks/useBasket";
import config from "../../config.json";
const Counter = ({ item, index }) => {
    const { deleteArrayOfBasket } = useBasket();
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };
    const handeDecrement = () => {
        setCount((prevState) => prevState - 1);
    };
    const handleDeleteBasket = () => {
        deleteArrayOfBasket(index);
    };
    return (
        <tr>
            <td style={{ width: "250px" }}>
                {
                    <Link
                        to={`/katalog/${item.category_product}/${item.product_name}`}
                    >
                        <img
                            src={config.apiEndpoint + item.product_image}
                            alt="logo"
                            height="100px"
                            width="180px"
                        />
                    </Link>
                }
            </td>
            <td>{item.product_name}</td>
            <td>{item.present_price}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-danger btn-sm d-flex justify-content-center align-items-center"
                        onClick={handeDecrement}
                        style={{
                            cursor: "pointer",
                            width: "25px",
                            height: "25px"
                        }}
                    >
                        -
                    </button>
                    <div className="mx-2 h5">{count}</div>
                    <button
                        className=" btn btn-primary btn-sm d-flex justify-content-center align-items-center"
                        onClick={handleIncrement}
                        style={{
                            cursor: "pointer",
                            width: "25px",
                            height: "25px"
                        }}
                    >
                        +
                    </button>
                </div>
            </td>
            <td>{count * item.present_price}</td>
            <td
                className="h3 text-danger"
                style={{
                    cursor: "pointer"
                }}
                onClick={handleDeleteBasket}
            >
                x
            </td>
        </tr>
    );
};

export default Counter;
