import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length > 0) {
      addTodo(newTodo);
    }
    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="todo__form">
          <input
            className="form__input"
            placeholder="Enter Todos Here"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
