import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
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
        if (parsedItem !== initialValue) {
          setItem(parsedItem);
        }
      }
  
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    }, 2000)
  }, [initialValue, itemName])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
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
