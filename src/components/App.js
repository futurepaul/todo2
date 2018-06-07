import React from "react";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { Todos } from "./Todos";
import "./App.css";

export default connect(
  {
    todos: state`todos`,
    toggleCompleted: signal`toggleCompleted`
  },
  function App({ todos, toggleCompleted }) {
    return (
      <div className="App">
        <header>
          <h1>Todo2</h1>
        </header>
        <main>
          <input placeholder="New todo" />
          <div className="columns">
            <Todos
              header="Today"
              todos={todos}
              toggleCompleted={toggleCompleted}
            />
            <Todos
              header="Someday"
              todos={todos}
              toggleCompleted={toggleCompleted}
            />
            <Todos
              header="Done"
              todos={todos}
              toggleCompleted={toggleCompleted}
            />
          </div>
        </main>
      </div>
    );
  }
);
