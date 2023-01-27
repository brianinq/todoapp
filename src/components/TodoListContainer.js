import React from "react";
import TodoItem from "./TodoItem";

function TodoListContainer({ todos, updateItem, deleteItem }) {
  return (
    <div className="container">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoListContainer;
