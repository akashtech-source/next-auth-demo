import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/todo", { todo });
      toast.success(res.data.msg);
      setTodo("");
    } catch (err) {}
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="value"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" className="bg-purple-600 text-white p-3" />
      </form>
    </div>
  );
};

export default TodoInput;
