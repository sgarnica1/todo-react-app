import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

export function ToDoCounter() {
  const { completedTodos, totalTodos } = React.useContext(ToDoContext);

  return (
    <section className="ToDoCounter">
      <h1 className="ToDoCounter__title">Your Tasks</h1>
      <h2 className="ToDoCounter__description">
        Has completado {completedTodos} de {totalTodos} todos
      </h2>
    </section>
  );
}
