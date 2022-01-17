import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoForm } from "../ToDoForm";
import { Modal } from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    filteredTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Error al cargar</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !filteredTodos.length && <p>Crea tu primer ToDo</p>}
        {filteredTodos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
