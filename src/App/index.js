import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { LoadingTodos } from "../LoadingTodos";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchTodos } from "../EmptySearchTodos";
import { TodosError } from "../TodosError";
import { TodoIconCheck } from "../TodoIconCheck";
import { TodoIconDelete } from "../TodoIconDelete";
import { StorageChangeAlert } from "../StorageChangeAlert";

function App() {
  const {
    error,
    loading,
    filteredTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        // Props
        error={error}
        loading={loading}
        filteredTodos={filteredTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        // Render functions
        onError={() => <TodosError />}
        onLoading={(key) => <LoadingTodos key={key} />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearchTodos searchValue={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            TodoIconCheck={TodoIconCheck}
            TodoIconDelete={TodoIconDelete}
          />
        )}
      ></TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <StorageChangeAlert sincronize={sincronizeTodo} />
    </React.Fragment>
  );
}

export default App;
