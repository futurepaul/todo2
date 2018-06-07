import React, { Component } from "react";
import { Provider, Consumer } from "./state";
import "./App.css";
import { Todos } from "./Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo2</h1>
        </header>
        <main>
          <Provider>
            <input placeholder="New todo" />
            <div className="columns">
              <Todos header="Today" />
              <Todos header="Someday" />
              <Todos header="Done" />
            </div>
          </Provider>
        </main>
      </div>
    );
  }
}

export default App;
