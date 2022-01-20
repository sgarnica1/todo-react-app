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
          props.totalTodos === 0 &&
          !props.filteredTodos.length &&
          props.onEmptyTodos()}
        {!props.error &&
          !props.loading &&
          props.totalTodos > 0 &&
          !props.filteredTodos.length &&
          props.onEmptySearchResults(props.searchValue)}
        {props.filteredTodos.map(props.render)}

        {props.children}
      </ul>
    </section>
  );
}
