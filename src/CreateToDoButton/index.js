import React from "react";
import "./CreateToDoButton.css";

export function CreateToDoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <section className="CreateToDoButton">
      <button className="CreateToDoButton__button" onClick={onClickButton}>
        +
      </button>
    </section>
  );
}
