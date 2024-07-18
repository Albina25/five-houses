import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
//import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
