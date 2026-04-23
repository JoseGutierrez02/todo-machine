import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function TodoForm (props) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')
  const [error, setError] = React.useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!newTodoValue.trim()) {
      setError('El campo no puede estar vacío')
      return
    }
    props.submitEvent(newTodoValue)
    navigate('/')
  }

  const onCancel = () => navigate('/')

  const onChange = (event) => setNewTodoValue(event.target.value)

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
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
        <button type='submit' className='TodoForm-button TodoForm-button--add'>{props.submitText}</button>
      </div>
    </form>
  )
}

export { TodoForm }
