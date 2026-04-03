import React from 'react'
import './index.css'

function TodoForm ({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const [error, setError] = React.useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!newTodoValue.trim()) {
      setError('El campo no puede estar vacío')
      return
    }
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => setOpenModal(false)

  const onChange = (event) => setNewTodoValue(event.target.value)

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      {error && <p className="TodoForm-error-message">{error}</p>}
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }
