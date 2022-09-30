import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getTasksAsync = () => {
  return api.get("/tasks");
};
export const deleteTaskAsync = (id) => {
  return api.delete(`/tasks/${id}`);
};

export const toggleTaskAsync = (task) => {
  console.log("task", task);
  return api.patch(`/tasks/${task.id}`, {
    completed: !task.completed,
  });
};

export const updateTaskAsync = (task) => {
  console.log("task", task);
  return api.patch(`/tasks/${task.id}`, {
    task: task.task,
  });
};
