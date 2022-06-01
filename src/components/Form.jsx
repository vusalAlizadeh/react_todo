import React from "react";

const Form = ({ setInputText, inputText, setTodos, todos, handleSelect }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 10000 },
      ]);
    }
    setInputText("");
  };

  return (
    <form>
      <div className="input-field">
        <input
          type="text"
          className="todo-input"
          placeholder="enter your todo"
          onChange={inputTextHandler}
          value={inputText}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      <div className="todo-filter">
        <select name="filter" className="filter" onChange={handleSelect}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
