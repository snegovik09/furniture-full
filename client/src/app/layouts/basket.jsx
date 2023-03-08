import React from "react";
import { Button, Form } from "react-bootstrap";
import Breadcrumb from "../components/common/breadCrumb";
import Counter from "../components/common/counter";
import { useBasket } from "../hooks/useBasket";

const Basket = () => {
    const { arrayBasket } = useBasket();
    if (arrayBasket.length === 0) {
        return (
            <div className="h2 d-flex justify-content-center mt-4">
                В корзинет нет товаров
            </div>
        );
    } else {
        return (
            <>
                <div className="d-flex">
                    <div className="d-flex flex-column offset-2 col-10 p-3">
                        <Breadcrumb />
                        <h2>Корзина</h2>
                        <table className="table align-middle text-center">
                            <thead className="text-secondary">
                                <tr>
                                    <th scope="col">Фото</th>
                                    <th scope="col">Наименование</th>
                                    <th scope="col">Цена</th>
                                    <th scope="col">Кол-во</th>
                                    <th scope="col">Сумма</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrayBasket.map((item, i) => (
                                    <Counter key={i} item={item} index={i} />
                                ))}
                            </tbody>
                        </table>
                        <div className="p-3 d-flex justify-content-between">
                            <Form className="col-5">
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name">
                                        Имя Фамилия
                                    </Form.Label>
                                    <Form.Control
                                        id={"name"}
                                        // value={name}
                                        // onChange={(e) => setId(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">
                                        Электонная почта
                                    </Form.Label>
                                    <Form.Control
                                        id={"email"}
                                        // value={email}
                                        // onChange={(e) => setId(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="number">
                                        Мобильный телефон
                                    </Form.Label>
                                    <Form.Control
                                        id={"number"}
                                        // value={number}
                                        // onChange={(e) => setId(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="address">
                                        Адрес
                                    </Form.Label>
                                    <Form.Control
                                        id={"address"}
                                        // value={address}
                                        // onChange={(e) => setId(e.target.value)}
                                    />
                                </Form.Group>
                                <Button
                                    variant="outline-success"
                                    // onClick={addDevice}
                                >
                                    Оформить заказ
                                </Button>
                            </Form>
                            <div className="col-6">
                                После заказа онлайн наш специалист позвонит Вам
                                и согласует/подтвердит состав заказа и
                                необходимые услуги.
                                <br /> <span className="fw-bold">Доставка</span>
                                <br />
                                <ul>
                                    <li>
                                        по Москве: от 1500 руб. (зависит от
                                        массы и габаритов) + 40 руб/км (за
                                        пределы МКАД)
                                    </li>
                                    <li>
                                        по Краснодару, Екатеринбургу*,
                                        Новосибирску*: от 1000 руб. (зависит от
                                        массы и габаритов) + 29-35 руб/км (за
                                        пределы города)
                                    </li>
                                    <li>
                                        Цены на тарифы доставки указанны с
                                        учетом использования сборки. При отказа
                                        от сборки цены на доставку будут
                                        перерасчитанны.
                                    </li>
                                    <li>
                                        В Ставропле и Михайловске доставка
                                        осуществляется за счет фабрики
                                        (бесплатно) только при 100% предоплате
                                        заказа
                                    </li>
                                    <br />
                                </ul>
                                *доставка из Новосибирска, Екатеринбурга
                                действует при 100% предоплате
                                <br /> <span className="fw-bold">Сборка</span>
                                <br />{" "}
                                <ul>
                                    <li>
                                        Москва, Санкт-Петербург: 10% от
                                        стоимости, от 2000 руб за комплект. + 40
                                        руб/км (за пределы МКАД)* *при сумме
                                        заказа от 150 тыс руб. сборка в Москве,
                                        МО, Санкт-Петербурке и ЛО составляет 5%
                                    </li>
                                    <li>
                                        В Краснодаре, Екатеринбурге,
                                        Новосибирске, Ставрополе: 6%-8% от
                                        стоимости, от 1200 руб за комплект.
                                    </li>
                                    <li>
                                        Выезд сборщика за пределы города Москва
                                        (МКАД), Санкт-Петербург (КАД) 40 руб/км
                                    </li>
                                    <li>
                                        Выезд сборщика за пределы гороов:
                                        Екатеринбург, Новосибирск, Ставрополь:
                                        29 руб/км
                                    </li>
                                    <li>
                                        В Ставропле и Михайловске сборка
                                        осуществляется за счет фабрики
                                        (бесплатно) только при 100% предоплате
                                        заказа
                                    </li>
                                </ul>
                                <br /> Обращаем Ваше внимание, что окончательная
                                стоимость заказа, если в нем присутствуют товары
                                и/или услуги, участвующие в акции, будет
                                подтверждена после обработки заказа сотрудником
                                компании.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Basket;
