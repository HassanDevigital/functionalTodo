import React from "react";
import { Todo } from "./Todo";
export const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todoArray) => (
            <Todo
              key={todoArray.id}
              todos={todos}
              setTodos={setTodos}
              todoArray={todoArray}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
