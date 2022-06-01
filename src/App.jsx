import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("");

  const handleSelect = (e) => {
    setStatus(e.target.value);
  };
  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [status, todos]);

  return (
    <div className="app">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        handleSelect={handleSelect}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
