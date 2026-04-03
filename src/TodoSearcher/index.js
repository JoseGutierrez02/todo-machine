import './index.css'

function TodoSearcher({ searchValue, setSearchValue, loading }) {

  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      disabled={loading}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearcher }
