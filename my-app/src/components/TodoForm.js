import React, { useState } from "react";

const ToDoForm = props => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const handleSumbit = e => {
    e.preventDefault();
    if (newTodo.length > 0) {
      props.submit(newTodo);
      setNewTodo("");
    } else {
      alert("add todo");
    }
  };

  const clearCompleted = e => {
    e.preventDefault();
    props.clear();
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          onChange={handleChanges}
          type="text"
          name="tasks"
          value={newTodo}
        />
        <button type="submit">Add Task</button>
        <button onClick={clearCompleted}>Clear Tasks</button>
      </form>
    </div>
  );
};

export default ToDoForm;
