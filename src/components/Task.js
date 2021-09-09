import React, { Component } from "react";
// import "./Task.css";
import PropTypes from "prop-types";

//// JSX ////
// Clase dedicada a renderizar elementos task que se le suministren.
class Task extends Component {
  // Función para reemplazar al archivo Task.css
  // Para el elemento "task" que posea su variable "done" como false o true, darle un estilo diferente respectivamente.
  StyleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "blue",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;
    return (
      <p style={this.StyleCompleted()}>
        {task.title} - {task.description} - {task.done} - {task.id}
        <input
          type="checkbox"
          name={'ch' + task.id}
          value={task.done}
          onChange={this.props.checkDone.bind(this, task.id)}
        />
        <button
          style={btnDelete}
          onClick={this.props.deleteTask.bind(this, task.id)}
        >
          x
        </button>
      </p>
    );
  }
}

// Exigir que solo se puedan recibir elementos de tipo 'object' para hacer uso de la clase Task.
Task.propTypes = {
  task: PropTypes.object.isRequired,
};

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
  // float: 'right'
};

export default Task;
