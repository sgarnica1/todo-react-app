import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="TodoSearch">
      <input
        className="TodoSearch__input"
        placeholder="Search for tasks"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </section>
  );
}
