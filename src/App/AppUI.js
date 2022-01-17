import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoForm } from "../ToDoForm";
import { Modal } from "../Modal";
import { LoadingToDos } from "../LoadingToDos";
import { EmptyToDos } from "../EmptyToDos";
import { ToDosError } from "../ToDosError";
import { ToDoIconCheck } from "../ToDoIconCheck";
import { ToDoIconDelete } from "../ToDoIconDelete";

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
        {error && <ToDosError error={error} />}
        {!error &&
          loading &&
          new Array(3).fill().map((item, index) => <LoadingToDos key={index}/>)}
        {!error && !loading && !filteredTodos.length && <EmptyToDos />}
        {!error &&
          filteredTodos.map((todo) => (
            <ToDoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              ToDoIconCheck={ToDoIconCheck}
              ToDoIconDelete={ToDoIconDelete}
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
