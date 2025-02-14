import { createContext, useState } from "react";
import { initialTasks } from "./tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
