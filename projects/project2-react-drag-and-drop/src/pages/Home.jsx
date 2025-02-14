import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext"; // Access the context
import TaskColumn from "../components/TaskColumn"; // Import TaskColumn

function Home() {
  const [newTaskTitle, setNewTaskTitle] = useState(""); // Track new task input
  const { addTask } = useContext(TaskContext); // Access addTask from context

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== "") {
      addTask(newTaskTitle); // Add task if title is not empty
      setNewTaskTitle(""); // Clear input after adding task
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl">
        {/* Task Input Form */}
        <form onSubmit={handleAddTask} className="mb-6 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter new task"
            className="px-4 py-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </form>

        {/* Columns for To Do, In Progress, and Done */}
        <div className="flex flex-wrap gap-6 justify-start">
          <TaskColumn status="todo" title="To Do" />
          <TaskColumn status="in-progress" title="In Progress" />
          <TaskColumn status="done" title="Done" />
        </div>
      </div>
    </div>
  );
}

export default Home;
