import { createContext, useState, useEffect } from "react";
import { initialTasks } from "../data/tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const updateTaskStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      status: "todo", // New tasks start in the "To Do" column
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, updateTaskStatus, addTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
