import React, { Component } from "react";

export default class TaskForm extends Component {
  /*
  [a] Para evitar que la información de las cajas de texto se borre al presionar el botón de enviar, el cual va a recargar la página, se proseguirá de la siguiente manera:
  1- Se hace uso de un argumento 'event', el cual, almacenará los datos y variables usados durante la etiqueta del formulario, procurando que no se recargue la página y generen nuevamente las variables, borrando el argumento 'event', este argumento 'event' contiene dentro de sí la orden de recarga, simplemente se anulará esta acción al activar su propio método 'preventDefault'.
  2- Se crea un método que sirva para revisar el evento de escritura del usuario en las cajas de texto.
  3- Se guardarán los valores de dichas cajas en la variable 'state', haciendo uso de los hook.setState.
  4- Se asignan a los cuadros de textos los valores del objeto 'state', bloqueando su contenido para conectarlo con sus valores anteriores al evento de presionar el botón de envio.
  */

  //[a3]
  state = {
    title: "",
    description: "",
  };

  // Método que se ejecuta para hacer envio la etiqueta del formulario.
  onSubmit = (event_form) => {
    // Reviso la existencia de la variable state durante la ejecución del método al presionar el botón de enviar.
    console.log(this.state);
    // Evitar que la página se reacargue y borre la información suministrada tras presionar un botón.
    event_form.preventDefault(); //[a1]
  };

  //[a2] Cambia el valor de las cajas de texto donde el usuario ingresa los datos, para que no se borren los datos tras escribir sobre ellos.
  onChange = (event_write) => {
    console.log(event_write.target.name, ": ", event_write.target.value);
    //[a3]
    this.setState({
      [event_write.target.name]: event_write.target.value,
    });
  };

  // Función de etiquetas
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a Task"
          onChange={this.onChange}
          value={this.state.title} //[a4]
        />
        <br />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Write a Description"
          onChange={this.onChange}
          value={this.state.description} //[a4]
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
