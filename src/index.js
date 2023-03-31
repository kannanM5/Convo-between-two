import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import RouterConfigure from "./router/Router";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterConfigure />
    </Provider>
  </React.StrictMode>
);
