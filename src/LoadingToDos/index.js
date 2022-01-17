import React from "react";
import "./LoadingToDos.css"

function LoadingToDos() {
  return (
    <article className="LoadingToDos">
      <div className="LoadingToDos__circle"></div>
      <div className="LoadingToDos__text"></div>
    </article>
  );
}

export { LoadingToDos };
