import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos () {
  const {
    item: todos,
    saveItem: setTodos,
    synchronizeItem: synchronizeTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V2', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  })

  
  const addTodo = (text) => {
    const id = newTodoId(todos)
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
      id,
    })
    setTodos(newTodos)
  }

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    return todos[todoIndex]
  }

  const checkTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const editTodo = (id, newText) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].text = newText
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    getTodo,
  }

  const stateUpdaters = {
    setSearchValue,
    checkTodo,
    deleteTodo,
    editTodo,
    addTodo,
    synchronizeTodos,
  }
  
  return { states, stateUpdaters }
}

function newTodoId (todoList) {
  if (todoList.length === 0) return 1
  const idList = todoList.map((todo) => todo.id)
  const maxId = Math.max(...idList)
  return maxId + 1
}

export { useTodos }