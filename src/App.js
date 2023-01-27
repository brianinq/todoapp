import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="separator"></div>
      <CreateTodo />
      <TodoListContainer />
    </div>
  );
}

export default App;
