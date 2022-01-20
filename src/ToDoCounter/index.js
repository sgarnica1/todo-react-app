import "./TodoCounter.css";

export function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <section className="TodoCounter">
      <h1 className="TodoCounter__title">Your Tasks</h1>
      <h2 className="TodoCounter__description">
        You've completed {completedTodos} out of {totalTodos} TODOs
      </h2>
    </section>
  );
}
