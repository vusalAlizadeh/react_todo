import React, { useState } from "react";

const Todo = ({ todo, setTodos, todos }) => {
  const [todoClassName, setTodoClassName] = useState("todo");

  const handleDelete = () => {
    setTodoClassName("todo fall");
    setTimeout(() => {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }, 1000);
  };

  const handleCompleted = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...todo, completed: !todo.completed } : item
      )
    );
  };
  return (
    <div className={todoClassName}>
      <li className={`${todo.completed ? "todo-item completed" : "todo-item"}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={handleCompleted}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
