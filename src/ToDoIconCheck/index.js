import React from "react";
import { BsCheckLg } from "react-icons/bs";
import './TodoIconCheck.css'

function TodoIconCheck(props) {
  return (
    <button
      className={`TodoItem__check-mark ${props.completed && "active"}`}
      onClick={props.onComplete}
    >
      <BsCheckLg />
    </button>
  );
}

export { TodoIconCheck };
