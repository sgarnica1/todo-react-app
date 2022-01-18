import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="TodoItem">
      <props.TodoIconCheck
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem__text ${props.completed && "complete"}`}>
        {props.text}
      </p>
      <props.TodoIconDelete 
        onDelete={props.onDelete}
      />
    </li>
  );
}
