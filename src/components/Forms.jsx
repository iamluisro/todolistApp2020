import React, { useState } from "react";
import "../styles/App.css";

const Forms = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='Forms-Input'
          type='text'
          value={todo}
          placeholder='...add to do'
          onChange={e => setTodo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Forms;
