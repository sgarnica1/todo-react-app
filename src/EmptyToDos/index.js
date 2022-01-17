import React from "react";
import "./EmptyToDos.css";

function EmptyToDos() {
  return (
    <section className="EmptyToDos">
      <img src="./empty.png" alt="Empty folder"/>
      <h2>There is nothing here to show :(</h2>
      <p>Add a new TODO to your list</p>
    </section>
  );
}

export { EmptyToDos };
