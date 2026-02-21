import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './index.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onCheckTodo={props.onCheckTodo}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDeleteTodo={props.onDeleteTodo}/>
    </li>
  );
}

export { TodoItem };