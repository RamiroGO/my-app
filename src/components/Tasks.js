import React, { Component } from "react";
import Task from "./Task";

// Clase dedicada a recorrer una lista de Tasks
class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

export default Tasks;