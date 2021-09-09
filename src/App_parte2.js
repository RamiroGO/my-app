import React, { Component } from "react";
// Importar de 'react-router-dom' la clase 'BrowserRouter' pero será usada en el código bajo el nombre 'Route'.
import { BrowserRouter as BrRouter, Route, Link } from "react-router-dom";

import "./App.css";
import tasks from "./sample/task.json";

// Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";
//// Código JSX ////

// function render_element(e) {
//   return <h1>{e.title}</h1>;
// }

class App extends Component {
  // Incorporamos la variable recibida de la librería a una variable de clase "state"
  // [b1] Guardando la lista de los elementos Task que está recibiendo desde los controles de la pantalla que se están visualizando con las etiquetas Task.
  state = {
    tasks: tasks,
  };

  // [b2]
  addTask = (state) => {
    console.log(state.title, state.description);
    // Crear un objeto con los valores recibidos
    const newTask = {
      id: this.state.tasks.length,
      title: state.title,
      description: state.description,
      done: false,
    };
    // Agregar el nuevo elemento newTask a la lista de tareas del 'this.state'
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };
  // [b2]
  deleteTask = (id) => {
    // Creamos una copia de todo el arreglo de tareas, excepto aquella tarea que posea el id que se quiere eliminar.
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };
  // [b2]
  checkDone = (_id) => {
    const newTasks = this.state.tasks.map((task) => {
      // Preguntamos cual es el id que corresponde con el checkbox que se ha pulsado.
      if (task.id === _id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };
  render() {
    return (
      <div>
        <BrRouter>
          {/* Botones que añade a la URL un enrutamiento para visualizar diferentes clases */}
          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>
          {/* Mostrar el Contenido de la página según el enrutamiento que se ha tomado */}
          <Route
            exacts
            path="/"
            // Para cada elemento a renderizar, se generará un nuevo <div>
            render={() => {
              return (
                // Visualizar una tabla que represente los valores del arreglo recibido
                <div>
                  {/* Al momento de invocar el TaskForm, también enviamos la función addTask */}
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          />
          {/* Hacer un llamado a un servidor fake para recibir una lista de textos y datos */}
          <Route path="/posts" component={Posts} />
        </BrRouter>
      </div>
    );
  }
}

export default App;