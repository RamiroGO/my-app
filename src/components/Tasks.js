import React, { Component } from "react";
import Task from "./Task";

// Clase dedicada a recorrer una lista de Tasks
class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

// Existe el requisito que los elementos deben ser de tipo task para ejecutar la etiqueta de clase Task
// // Exigir que solo se puedan recibir elementos de tipo 'object' para hacer uso de la clase Task.
// Tasks.propTypes = {
//   tasks: PropTypes.array.isRequired
// }

export default Tasks;