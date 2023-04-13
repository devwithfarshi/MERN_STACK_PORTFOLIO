import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/store";

import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  transition: transitions.SCALE,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AlertProvider
      template={AlertTemplate}
      {...options}
    >
      <App />
    </AlertProvider>
  </Provider>,
);
