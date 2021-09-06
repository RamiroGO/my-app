import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App_parte2"; // Invoca la parte 1 y la parte del Tutorial de Fazt (https://youtu.be/zIY87vU33aA a partir del minuto 1:17:00)

// Convertir el elemento <div id="root"> que se encuentra en el "index.html" en una clase App que se encuentra en el archivo "App.js"
ReactDOM.render(<App />, document.getElementById("root"));