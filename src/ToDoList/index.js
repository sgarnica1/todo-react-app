import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  const renderFunc = props.children ? props.children : props.render;

  return (
    <section className="TodoList">
      <ul>
        {/* Error */}
        {props.error && props.onError()}

        {/* Loading */}
        {!props.error &&
          props.loading &&
          new Array(3).fill().map((item, index) => props.onLoading(index))}

        {/* Empty todos list */}
        {!props.error &&
          !props.loading &&
          !props.totalTodos &&
          props.onEmptyTodos()}

        {/* No results */}
        {!props.error &&
          !props.loading &&
          props.totalTodos > 0 &&
          !props.filteredTodos.length &&
          props.onEmptySearchResults(props.searchValue)}

        {/* Todos list */}
        {props.filteredTodos.map(renderFunc)}
      </ul>
    </section>
  );
}
