import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ deleteTodo, todos, toggleTodo, todoToEdit }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={deleteTodo}
          todo={todo}
          toggleTodo={toggleTodo}
          todoToEdit={todoToEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
