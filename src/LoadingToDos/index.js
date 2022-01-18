import React from "react";
import "./LoadingTodos.css"

function LoadingTodos() {
  return (
    <article className="LoadingTodos">
      <div className="LoadingTodos__circle"></div>
      <div className="LoadingTodos__text"></div>
    </article>
  );
}

export { LoadingTodos };
