import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="TodoSearch">
      <input
        className="TodoSearch__input"
        placeholder="Search for tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </section>
  );
}
