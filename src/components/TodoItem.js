import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="border mt-3">
      <h3>{todo.name}</h3>
    </div>
  );
};

export default TodoItem;
