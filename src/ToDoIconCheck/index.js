import React from "react";
import { BsCheckLg } from "react-icons/bs";

function ToDoIconCheck(props) {
  return (
    <button
      className={`ToDoItem__check-mark ${props.completed && "active"}`}
      onClick={props.onComplete}
    >
      <BsCheckLg />
    </button>
  );
}

export { ToDoIconCheck };
