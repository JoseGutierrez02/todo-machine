import { TodoIcon } from '.'

function DeleteIcon({ onDeleteTodo }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDeleteTodo}
    />
  )
}

export { DeleteIcon }
