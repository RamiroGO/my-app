import React from "react";
import "./App.css";

//// Código JSX ////

// Componentes como Funciones
// function HelloWorld(props) {
//   console.log(props);
//   return (
//     <div id="hello">
//       HelloWorld - App.js [Fcn] + {props.subtitle}
//     </div>
//   );
// }

// Componentes como Clase:
class HelloWorld extends React.Component {
  // Creamos una variable de estado para los botones que se generan en esta clase.
  state = { show: true };
  // Método que se activará al presionar botones
  Button_State = () => {
    // Uso de las funciones setState de React para cambiar el estado de las variables de esta clase.
    this.state.show = this.setState({ show: !this.state.show });
  };

  // Dibujar los componentes que se renderizarán por invocar a esta clase
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>HelloWorld - App.js [Class] + {this.props.subtitle}</h3>
          {this.props.my_text}
          <button onClick={this.Button_State}>Toggle Show</button>
        </div>
      );
    } else
      return (
        <div>
          <h3>none</h3>
          <button onClick={this.Button_State}>Toggle Show</button>
        </div>
      );
  }
}

const App2 = () => (
  <div>
    Hola App.Js
    <HelloWorld my_text="Hello Fazt" subtitle="loremp ispum 1" />
    <HelloWorld my_text="Hola 2" subtitle="loremp ispum 2" />
    <HelloWorld my_text="Hola 3" subtitle="loremp ispum 3" />
  </div>
);

function App() {
  return App2();
}

export default App;
