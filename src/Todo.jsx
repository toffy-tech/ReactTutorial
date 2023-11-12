import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handoleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handoleTodoClick}
        />
      </label>

      {todo.name}
    </div>
  );
};

export default Todo;
