import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/task.json";
import Tasks from "./components/Tasks";

//// Código JSX ////

// function render_element(e) {
//   return <h1>{e.title}</h1>;
// }

class App extends Component {
  // Incorporamos la variable recibida de la librería a una variable de clase "state"
  state = {
    tasks: tasks,
  };

  // Visualizar una tabla que represente los valores del arreglo recibido
  render() {
    return (
      <div>
        <Tasks tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
