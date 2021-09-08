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
  // [b1] Guardando la lista de los elementos Task que está recibiendo desde los controles de la pantalla que se están visualizando con las etiquetas Task.
  state = {
    tasks: tasks
  };
 
  // [b2]
  addTask = (state) => {
    console.log(state.title, state.description);
    // Crear un objeto con los valores recibidos
    const newTask = {
      id: this.state.tasks.length,
      title: state.title,
      description: state.description,
      done: false
    }
    // Agregar el nuevo elemento newTask a la lista de tareas del 'this.state'
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  // Visualizar una tabla que represente los valores del arreglo recibido
  render() {
    return (
      <div>
        {/* Al momento de invocar el TaskForm, también enviamos la función addTask */}
        <TaskForm addTask={ this.addTask }/> 
        <Tasks tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
