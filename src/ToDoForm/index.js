import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css'

function ToDoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { setOpenModal, addTodo } = React.useContext(ToDoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="ToDoForm">
      <label>Add TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Bake birthday cake"
      ></textarea>
      <div className="ToDoForm__button-container">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Create TODO</button>
      </div>
    </form>
  );
}

export { ToDoForm };
