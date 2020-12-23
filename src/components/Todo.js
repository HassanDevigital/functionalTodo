import React from "react";

export const Todo = ({ todoArray, todos, setTodos }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todoArray.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{todoArray.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
