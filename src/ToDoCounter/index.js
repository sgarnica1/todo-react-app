import React from "react";
import "./ToDoCounter.css";

export function ToDoCounter({ total, completed }) {
  return (
    <section className="ToDoCounter">
      <h1 className="ToDoCounter__title">Your Tasks</h1>
      <h2 className="ToDoCounter__description">Has completado {completed} de {total} todos</h2>
    </section>
  );
}
