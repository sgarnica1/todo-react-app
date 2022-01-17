import React from "react";
import { MdDelete } from "react-icons/md";

function ToDoIconDelete(props) {
  return (
    <button className="ToDoItem__delete" onClick={props.onDelete}>
      <MdDelete />
    </button>
  );
}

export { ToDoIconDelete };
