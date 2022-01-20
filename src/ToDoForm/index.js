import React from "react";
import "./TodoForm.css";

function TodoForm({ setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

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
    <form onSubmit={onSubmit} className="TodoForm">
      <label>Add TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Bake birthday cake"
      ></textarea>
      <div className="TodoForm__button-container">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Create TODO</button>
      </div>
    </form>
  );
}

export { TodoForm };
