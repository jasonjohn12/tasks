import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { deleteTaskAsync } from "../api/tasks";
const TodoItem = ({ deleteTodo, todo, toggleTodo, todoToEdit }) => {
  const handleToggle = () => {
    console.log("todo", todo);
    toggleTodo(todo);
  };

  const handleDelete = async () => {
    try {
      const response = await deleteTaskAsync(todo.id);
      // console.log("response", response);
      if (response.status === 200) {
        deleteTodo(todo.id);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleEdit = () => {
    todoToEdit(todo);
  };
  return (
    <div key={todo.id} className="todo__item">
      <div>
        <p
          onClick={handleToggle}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.task}
        </p>
      </div>

      <div className="buttons">
        <button
          onClick={handleEdit}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaEdit color="pink" size={18} />
        </button>
        <button
          onClick={handleDelete}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaTimes color="pink" size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
