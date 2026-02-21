import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearcher } from '../TodoSearcher';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './AppUi.css';


function AppUi () {
  const {
    loading,
    error,
    searchedTodos,
    checkTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  
  return (
    <div className='AppUI-container'>
      <TodoCounter />
      <TodoSearcher />

      <TodoList>

        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && !error && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCheckTodo={() => checkTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppUi }
