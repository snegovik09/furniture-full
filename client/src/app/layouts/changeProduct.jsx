import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addFurniture, loadFurnitureListAdmin } from "../store/furniture";

import { getCurrentUserData } from "../store/users";
const ChangeProduct = () => {
    const history = useHistory();
    const user = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [id_product, setId] = useState("");
    const [category_product, setCategory] = useState("");
    const [product_name, setName] = useState("");
    const [product_name_rus, setNameRus] = useState("");
    const [present_price, setPresentPrice] = useState("");
    const [past_price, setPastPrice] = useState("");
    const [file, setFile] = useState(null);

    const addDevice = () => {
        const formData = new FormData();
        formData.append("id_product", id_product);
        formData.append("category_product", category_product);
        formData.append("product_name", product_name);
        formData.append("product_name_rus", product_name_rus);
        formData.append("product_image", file);
        formData.append("present_price", present_price);
        formData.append("past_price", past_price);
        dispatch(addFurniture(formData));
        dispatch(loadFurnitureListAdmin());
        history.push(`/katalog/${category_product}`);
    };
    const handleFile = ({ target }) => {
        setFile(target.files[0]);
    };
    const check = ({ target }) => {
        if (target.id === "bedrooms") {
            setCategory("bedrooms");
        } else if (target.id === "livingrooms") {
            setCategory("livingRooms");
        } else if (target.id === "cushionedfurniture") {
            setCategory("cushionedFurniture");
        }
    };
    return (
        <div className="offset-4 p-3 col-4">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="ID">ID продукта</Form.Label>
                    <Form.Control
                        id={"ID"}
                        value={id_product}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="category_product">
                        Категория продукта
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        id={"bedrooms"}
                        name={"category_product"}
                        label={"bedrooms"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"livingrooms"}
                        name={"category_product"}
                        label={"livingrooms"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"cushionedfurniture"}
                        name={"category_product"}
                        label={"cushionedfurniture"}
                        onChange={check}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_name">Имя продукта</Form.Label>
                    <Form.Control
                        id={"product_name"}
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_name_rus">
                        Имя продукта на русском
                    </Form.Label>
                    <Form.Control
                        id={"product_name_rus"}
                        value={product_name_rus}
                        onChange={(e) => setNameRus(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image">Картинка</Form.Label>
                    <Form.Control
                        type="file"
                        id={"product_image"}
                        onChange={handleFile}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="present_price">
                        Текущая цена
                    </Form.Label>
                    <Form.Control
                        id={"present_price"}
                        value={present_price}
                        onChange={(e) => setPresentPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="past_price">Старая цена</Form.Label>
                    <Form.Control
                        id={"past_price"}
                        value={past_price}
                        onChange={(e) => setPastPrice(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Button variant="outline-success" onClick={addDevice}>
                Добавить
            </Button>
        </div>
    );
};

export default ChangeProduct;
