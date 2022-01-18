import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <section className="CreateTodoButton">
      <button className="CreateTodoButton__button" onClick={onClickButton}>
        +
      </button>
    </section>
  );
}
