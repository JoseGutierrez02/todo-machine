import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearcher } from '../../ui/TodoSearcher';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading';
import { MessageInfo } from '../../ui/MessageInfo';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { ChangeAlert } from '../../ui/ChangeAlert';
import './index.css';

function HomePage () {
  const navigate = useNavigate()
  const { states, stateUpdaters } = useTodos()

  const {
    loading,
    error,
    searchedTodos,
    // openModal,
    completedTodos,
    totalTodos,
    searchValue,
  } = states

  const {
    checkTodo,
    deleteTodo,
    // setOpenModal,
    // addTodo,
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onCheckTodo={() => checkTodo(todo.id)}
            onDeleteTodo={() => deleteTodo(todo.id)}
            onEditTodo={() => {
              navigate(
                `/edit/${todo.id}`,
                {
                  state: { todo }
                }
              )
            }}
          />
        )}
      </TodoList>

      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
      />

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <ChangeAlert synchronize={synchronizeTodos} />
    </div>
  );
}

export { HomePage };
