import React from "react";
import "./Todos.css";

const Todo = ({ completed, toggleCompleted, id, children }) => (
  <li
    onClick={() => toggleCompleted({ id })}
    className={completed ? "strikethrough" : ""}
  >
    {children}
  </li>
);

export const Todos = ({ header, todos, toggleCompleted }) => (
  <div>
    <h2>{header}</h2>
    {Object.keys(todos).map(id => (
      <ul>
        <Todo
          key={id}
          id={id}
          completed={todos[id].completed}
          toggleCompleted={toggleCompleted}
        >
          {todos[id].text}
        </Todo>
      </ul>
    ))}
  </div>
);
