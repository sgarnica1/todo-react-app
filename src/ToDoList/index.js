import React from "react";
import "./ToDoList.css"

export function ToDoList(props) {
  return (
    <section className="ToDoList">
     <ul>
       {props.children}
     </ul>
    </section>
  )
}