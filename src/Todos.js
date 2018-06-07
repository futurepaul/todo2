import React, { Component } from "react";
import { Consumer } from "./state";
import "./Todos.css";

const Todo = props => (
  <li className={props.status === 1 ? "strikethrough" : ""}>
    {props.children}
  </li>
);

export const Todos = ({ header }) => (
  <Consumer>
    {state => (
      <div>
        <h2>{header}</h2>
        {state.todos.map(todo => (
          <ul>
            <Todo key={todo.id} status={todo.status}>
              {todo.text}
            </Todo>
          </ul>
        ))}
      </div>
    )}
  </Consumer>
);
