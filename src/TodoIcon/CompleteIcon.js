import { TodoIcon } from './'

function CompleteIcon({ completed, onCheckTodo }) {
  const green = "#4caf50"
  return (
    <TodoIcon
      type="check"
      color={completed ? green : "gray"}
      onClick={onCheckTodo}
    />
  )
}

export { CompleteIcon }
