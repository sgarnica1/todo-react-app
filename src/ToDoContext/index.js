import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: todos,
    saveItemToLocalStorage: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let filteredTodos = [];

  if (!searchValue.length > 0) {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchValueText = searchValue.toLowerCase().trim();

      return todoText.includes(searchValueText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    })

    saveTodos(newTodos);
  };

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        addTodo,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
