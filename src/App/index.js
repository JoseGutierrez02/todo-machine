import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearcher } from '../TodoSearcher';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { MessageInfo } from '../MessageInfo';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';
import './index.css';

function App () {
  const {
    states,
    stateUpdaters
  } = useTodos()

  const {
    loading,
    error,
    searchedTodos,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
  } = states

  const {
    checkTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    setSearchValue,
    synchronizeTodos,
  } = stateUpdaters
  
  return (
    <div className='App-container'>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />

        <TodoSearcher
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <MessageInfo message="Ha habido un error!" type="error" />}
        onLoading={() => (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        onEmptyTodos={() => <MessageInfo message="Crea tu primer TODO!" />}
        onEmptySearchResults={
          (searchText) => <MessageInfo message={`No hay resultados para "${searchText}"`} />
        }
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCheckTodo={() => checkTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <ChangeAlert synchronize={synchronizeTodos} />
    </div>
  );
}

export default App;
