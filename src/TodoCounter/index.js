import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoCounter() {
  const { completedTodos, totalTodos, loading } = React.useContext(TodoContext)
  let title = <span>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</span>

  if (loading || totalTodos === 0) title = null

  if (totalTodos === completedTodos && totalTodos > 0) {
    title = <span>Felicidades! Has completado todas tus tareas👏</span>
  }

  return (
    <h1 className="TodoCounter">
      {title}
    </h1>
  );
}

export { TodoCounter };
