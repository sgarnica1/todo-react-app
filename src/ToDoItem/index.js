import React from "react";
import "./ToDoItem.css";

export function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <span
        className={`ToDoItem__check-mark ${props.completed && "active"}`}
        onClick={props.onComplete}
      >
        ᄼ
      </span>
      <p className={`ToDoItem__text ${props.completed && "complete"}`}>
        {props.text}
      </p>
      <span className="ToDoItem__delete" onClick={props.onDelete}>
        ✖
      </span>
    </li>
  );
}
