import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppContext from "./App-context";
import AppHooksAdicionais from "./AppHooksAdicionais";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppHooksAdicionais />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
