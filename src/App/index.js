import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../ToDoContext";
// const defaultTodos = [
//   {
//     text: "Tomar curso React.js",
//     completed: true,
//   },
//   {
//     text: "Ver película",
//     completed: false,
//   },
//   {
//     text: "Ir al súper",
//     completed: false,
//   },
//   {
//     text: "Hacer ejercicio",
//     completed: false,
//   },
// ];

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
