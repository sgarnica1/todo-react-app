import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css";

export function ToDoSearch() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="ToDoSearch">
      <input
        className="ToDoSearch__input"
        placeholder="Search for tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </section>
  );
}
