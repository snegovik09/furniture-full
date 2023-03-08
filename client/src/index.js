import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router } from "react-router-dom";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import history from "./app/utils/history";
import App from "./app/App";
import "./index.css";

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </BrowserRouter>
);
