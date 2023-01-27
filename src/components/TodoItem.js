import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, updateItem, deleteItem }) {
  return (
    <div className={`todoItem ${todo.done && "complete"}`}>
      <li>{todo.content}</li>
      <button
        className="actionIcon complete"
        onClick={() => updateItem(todo.id)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="actionIcon delete" onClick={() => deleteItem(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default TodoItem;
