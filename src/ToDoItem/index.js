import React from "react";
import { ToDoIconCheck } from "../ToDoIconCheck";
import { ToDoIconDelete } from "../ToDoIconDelete";
import "./ToDoItem.css";

export function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <ToDoIconCheck
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`ToDoItem__text ${props.completed && "complete"}`}>
        {props.text}
      </p>
      <ToDoIconDelete 
        onDelete={props.onDelete}
      />
    </li>
  );
}
