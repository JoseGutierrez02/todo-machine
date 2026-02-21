import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css'

function TodoSearcher() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearcher }
