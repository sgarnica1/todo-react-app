import React from "react";
import "./CreateToDoButton.css";

export function CreateToDoButton() {
  const onClickButton = (message) => {
    alert(message)
  }

  return (
    <section className="CreateToDoButton">
      <button 
        className="CreateToDoButton__button"
        onClick={() => {
          onClickButton("Aquí va el mensaje")
        }}
      >
        +
      </button>
    </section>
  );
}
