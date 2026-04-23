import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './index.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onCheckTodo={props.onCheckTodo}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <EditIcon onEditTodo={props.onEditTodo}/>
      <DeleteIcon onDeleteTodo={props.onDeleteTodo}/>
    </li>
  );
}

export { TodoItem };