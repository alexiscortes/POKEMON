import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PokeApp from "../containers/PokeApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeApp />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
