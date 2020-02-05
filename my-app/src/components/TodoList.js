import React, { useReducer } from "react";
import { initialState, TodoReducer } from "../reducers";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./Todo.css";

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleSumbit = load => {
    dispatch({ type: "ADD_TODO", payload: load });
  };

  const toggleCompletion = todoID => {
    dispatch({ type: "TOGGLE_COMPLETION", payload: todoID });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="task-list">
      <h1>Todo List</h1>
      {state.map(item => {
        return <Todo key={item.id} {...item} toggle={toggleCompletion} />;
      })}
      <TodoForm submit={handleSumbit} clear={clearCompleted} />
    </div>
  );
};

export default TodoList;
