import React from "react";

const Todo = props => {
  const toggle = e => {
    e.preventDefault();
    props.toggle(props.id);
  };

  return (
    <div
      className={`task${props.completed ? " completed" : ""}`}
      onClick={toggle}
    >
      <p>{props.item}</p>
    </div>
  );
};

export default Todo;
