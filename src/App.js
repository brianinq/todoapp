import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="separator"></div>
      <CreateTodo />
    </div>
  );
}

export default App;
