import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Convertir el elemento <div id="root"> que se encuentra en el "index.html" en una clase App que se encuentra en el archivo "App.js"
ReactDOM.render(<App />, document.getElementById("root"));