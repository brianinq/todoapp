import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function CreateTodo({ createItem, setFilter }) {
  const [content, setContent] = useState("");
  function addHandler() {
    const todoItem = {
      id: uuidv4(),
      content,
      done: false,
    };
    createItem(todoItem);
    setContent("");
  }
  return (
    <div className="filterSection">
      <div className="todoForm">
        <form onSubmit={addHandler}>
          <input
            type="text"
            id="new"
            name="item"
            placeholder="+ add a task"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </form>
      </div>
      <div className="filter">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
    </div>
  );
}

export default CreateTodo;
