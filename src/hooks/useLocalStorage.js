import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))
  const {
    synchronizedItem,
    item,
    loading,
    error,
  } = state

  // ACTION CREATORS
  const onError = (error) => dispatch({
    type: actionTypes.error,
    payload: error
  })

  const onSuccess = (item) => dispatch({
    type: actionTypes.success,
    payload: item
  })

  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item
  })

  const onSynchronize = () => dispatch({
    type: actionTypes.synchronize,
  })
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
      
      onSuccess(parsedItem);
    } catch (error) {
      onError(error)
    }
    }, 2000)
  }, [synchronizedItem])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }

  const synchronizeItem = () => {
    onSynchronize()
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  }
}

const initialState = ({ initialValue }) => ({
  synchronizedItem: true,
  item: initialValue,
  loading: true,
  error: false,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    loading: true,
    synchronizedItem: false,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React JS', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Practicar guitarra', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')
