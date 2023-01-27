import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoListContainer from "./components/TodoListContainer";
import instructions from "./utils/instructions";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("todos")) || instructions;
    setTodos(savedItems);
  }, []);
  const filteredTodos =
    filter === "all"
      ? [...todos]
      : todos.filter((t) => (filter === "complete" ? t.done : !t.done));

  function save(items) {
    localStorage.setItem("todos", JSON.stringify(items));
  }
  function createItem(item) {
    const updatedItems = [...todos, item];
    setTodos((todos) => updatedItems);
    save(updatedItems);
  }
  function updateItem(id) {
    const updateItems = todos.map((t) => {
      if (t.id === id) t.done = !t.done;
      return t;
    });
    setTodos(updateItems);
    save(updateItems);
  }
  function deleteItem(id) {
    const updatedItems = todos.filter((t) => t.id !== id);
    setTodos(updatedItems);
    save(updatedItems);
  }
  return (
    <div className="App">
      <Header />
      <div className="separator"></div>
      <CreateTodo createItem={createItem} setFilter={setFilter} />
      <TodoListContainer
        todos={filteredTodos}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
