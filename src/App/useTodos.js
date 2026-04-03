import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos () {
  const {
    item: todos,
    saveItem: setTodos,
    synchronizeItem: synchronizeTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  })

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })
    setTodos(newTodos)
  }

  const checkTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    openModal,
    searchedTodos,
  }

  const stateUpdaters = {
    setSearchValue,
    checkTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    synchronizeTodos,
  }
  
  return { states, stateUpdaters }
}

export { useTodos }