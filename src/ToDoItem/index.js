import React from "react";
import "./ToDoItem.css";

export function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <props.ToDoIconCheck
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`ToDoItem__text ${props.completed && "complete"}`}>
        {props.text}
      </p>
      <props.ToDoIconDelete 
        onDelete={props.onDelete}
      />
    </li>
  );
}
