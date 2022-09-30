import { useState, useEffect } from "react";
import { getTasksAsync, toggleTaskAsync, updateTaskAsync } from "./api/tasks";
import EditForm from "./components/EditForm";
import TodoList from "./components/TodoList";
import Header from "./Header";
import TodoForm from "./TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    console.log("process", process.env);
    let ignore = false;
    async function startFetching() {
      try {
        const response = await getTasksAsync();
        console.log("response", response);
        if (!ignore) {
          setTodos(response.data);
          console.log("data", response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);
  const toggleTodo = async (task) => {
    try {
      const response = await toggleTaskAsync(task);
      const toggleTodos = todos.map((todo) =>
        todo.id === task.id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(toggleTodos);
    } catch (error) {
      console.log("error", error);
    }
  };
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  const addTodo = async (task) => {
    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      body: JSON.stringify({ task, completed: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setTodos([...todos, json]);
    }
  };

  const todoToEdit = (todoToEdit) => {
    setIsEditing((prevState) => !prevState);
    setEditTodo(todoToEdit);
  };

  const updateTodo = async (updatedTodo) => {
    try {
      const response = await updateTaskAsync(updatedTodo);
      const updatedList = todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, task: updatedTodo.task } : todo
      );
      setTodos(updatedList);
    } catch (error) {}
  };
  return (
    <div className="App">
      <Header todos={todos} />
      {isEditing ? (
        <EditForm
          todoToEdit={editTodo}
          setEditTodo={setEditTodo}
          onEditTodo={updateTodo}
        />
      ) : (
        <TodoForm addTodo={addTodo} />
      )}

      {todos && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          todoToEdit={todoToEdit}
        />
      )}
    </div>
  );
}

export default App;
