import { TodoIcon } from '.'

function EditIcon({ onEditTodo }) {
  return (
    <TodoIcon
      type="edit"
      color="grey"
      onClick={onEditTodo}
    />
  )
}

export { EditIcon }
