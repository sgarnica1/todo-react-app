import React from "react";
import { MdDelete } from "react-icons/md";
import './TodoIconDelete.css'

function TodoIconDelete(props) {
  return (
    <button className="TodoItem__delete" onClick={props.onDelete}>
      <MdDelete />
    </button>
  );
}

export { TodoIconDelete };
