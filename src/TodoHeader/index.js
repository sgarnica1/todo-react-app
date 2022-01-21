import { cloneElement, Children } from "react";

function TodoHeader({ children, loading }) {
  const TodoHeaderChildren = Children.toArray(children);

  return (
    <header>
      {TodoHeaderChildren.map((child) => cloneElement(child, { loading }))}
    </header>
  );
}

export { TodoHeader };
