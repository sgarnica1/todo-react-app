import "./EmptySearchTodos.css";

function EmptySearchTodos({ searchValue }) {
  return (
    <section className="EmptyTodos">
      <h2>There are no results for "{searchValue}"</h2>
    </section>
  );
}

export { EmptySearchTodos };
