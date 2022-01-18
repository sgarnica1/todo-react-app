import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <section className="TodoCounter">
      <h1 className="TodoCounter__title">Your Tasks</h1>
      <h2 className="TodoCounter__description">
        You've completed {completedTodos} out of {totalTodos} TODOs
      </h2>
    </section>
  );
}
