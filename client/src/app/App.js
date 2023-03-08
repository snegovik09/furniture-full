import React from "react";
import { Route, Switch } from "react-router-dom";
import AppLoader from "./components/ui/hoc/appLoader";
import MainPage from "./layouts/mainPage";
import Basket from "./layouts/basket";
import NavMenu from "./components/ui/navMenu";
import ChangeProduct from "./layouts/changeProduct";
import Furniture from "./layouts/furniture";
import Profile from "./components/ui/profile";
import Title from "./components/ui/title";
import Footer from "./components/ui/footer";
import ProtectedRoute from "./components/common/protecredRoute";
import { BasketProviders } from "./hooks/useBasket";
import LogOut from "./layouts/logOut";
import Login from "./layouts/login";
import Edit from "./components/ui/edit";
import EditElem from "./components/ui/editElem";

function App() {
    return (
        <AppLoader>
            <NavMenu />
            <BasketProviders>
                <Title />
                <div style={{ minHeight: "1200px" }}>
                    <Switch>
                        <ProtectedRoute
                            path={"/product-change"}
                            component={ChangeProduct}
                        />{" "}
                        <ProtectedRoute
                            path={
                                "/katalog/:currentCategory?/:currentElement?/editElem"
                            }
                            exact
                            component={EditElem}
                        />{" "}
                        <Route
                            path={"/katalog/:currentCategory?/:currentElement?"}
                            component={Furniture}
                            exact
                        />{" "}
                        <Route path={"/login/:type?"} exact component={Login} />{" "}
                        <Route path="/logout" exact component={LogOut} />{" "}
                        <Route
                            path={"/oformlenie-zakaza"}
                            exact
                            component={Basket}
                        />{" "}
                        <ProtectedRoute
                            path={"/profile"}
                            exact
                            component={Profile}
                        />{" "}
                        <ProtectedRoute path={"/edit"} exact component={Edit} />{" "}
                        <Route path={"/"} exact component={MainPage} />{" "}
                    </Switch>{" "}
                </div>
            </BasketProviders>
            <Footer />
        </AppLoader>
    );
}

export default App;
