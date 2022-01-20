import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  return (
    <section className="TodoList">
      <ul>
        {props.error && props.onError()}
        {!props.error &&
          props.loading &&
          new Array(3).fill().map((item, index) => props.onLoading(index))}
        {!props.error &&
          !props.loading &&
          !props.filteredTodos.length &&
          props.onEmptyTodos()}
        {props.filteredTodos.map(props.render)}
      </ul>
    </section>
  );
}
