import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/task.json";

// Components
import Tasks from "./components/Tasks";
import TaskForm from './components/TaskForm';

//// Código JSX ////

// function render_element(e) {
//   return <h1>{e.title}</h1>;
// }

class App extends Component {
  // Incorporamos la variable recibida de la librería a una variable de clase "state"
  state = {
    tasks: tasks
  };

  // Visualizar una tabla que represente los valores del arreglo recibido
  render() {
    return (
      <div>
        <TaskForm/>
        <Tasks tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
