import React from "react";
import "./ToDoSearch.css";

export function ToDoSearch({searchValue, setSearchValue}) {

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
