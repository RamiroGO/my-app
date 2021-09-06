import React, { Component } from "react";
import "./Task.css";

//// JSX ////
// Clase dedicada a renderizar elementos task que se le suministren.
class Task extends Component {
  StyleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "blue",
      textDecoration: "none",
    };
  }

  render() {
    const { task } = this.props;
    return (
      <p style={this.StyleCompleted()}>
        {task.title} -{task.description} -{task.done} -{task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Task;
