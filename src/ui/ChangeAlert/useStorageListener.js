import React from "react";

function useStorageListener (synchronize) {
  const [storageChange, setStorageChange] = React.useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V2') {
      console.log('Hubo cambios en TODOS_V2')
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    synchronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow,
  }
}


export { useStorageListener }
