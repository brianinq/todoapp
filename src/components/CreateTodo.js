import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

function CreateTodo() {
  return (
    <div className="filterSection">
      <div className="todoForm">
        <form>
          <input type="text" id="new" name="item" placeholder="+ add a task" />
          <button type="submit">
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </form>
      </div>
      <div className="filter">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
    </div>
  );
}

export default CreateTodo;
