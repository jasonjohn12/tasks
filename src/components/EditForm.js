import { useState } from "react";

const EditForm = ({ todoToEdit, setEditTodo, onEditTodo }) => {
  //   console.log("todoToEdit", todoToEdit);
  const [updateTodo, setUpdateTodo] = useState(todoToEdit.task || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updateTodo", updateTodo);
    onEditTodo({ ...todoToEdit, task: updateTodo });

    // console.log("Submittin", updateTodo);
    setUpdateTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="todo__form">
          <input
            className="form__input"
            placeholder="Enter Todos Here"
            type="text"
            value={updateTodo}
            onChange={(e) => setUpdateTodo(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default EditForm;
