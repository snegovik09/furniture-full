import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            className="offset-2  text-white p-2"
            style={{ backgroundColor: "rgb(22, 22, 22)" }}
        >
            <div className="d-flex m-3 justify-content-around">
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Информация</div>
                    <Link to="#">Производители</Link>
                    <Link to="#">Способы оплаты</Link>
                    <Link to="#">Доставка</Link>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Клиентам</div>
                    <Link to="#">Обратная связь</Link>
                    <Link to="#">Помощь с выбором мебели</Link>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Компания</div>
                    <Link to="#">О нас</Link>
                    <Link to="#">Политика конфиденциальности</Link>
                </div>
                <div className="w-25 text-secondary">
                    <span className="h4">8-999-888-77-66</span> <br /> Режим
                    работы интернет-магазина: с 02:00 до 23:00 (МСК).
                    <br /> Адрес салона: шоссе Энтузиастов, д. 12, корп. 2<br />
                    Режим работы: ежедн. 10:00-22:00 Вcе магазины в Москве
                </div>
            </div>
        </div>
    );
};

export default Footer;
