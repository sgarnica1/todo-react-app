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
      <label>Añadir TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para la comida"
      ></textarea>
      <div className="ToDoForm__button-container">
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Crear TODO</button>
      </div>
    </form>
  );
}

export { ToDoForm };
