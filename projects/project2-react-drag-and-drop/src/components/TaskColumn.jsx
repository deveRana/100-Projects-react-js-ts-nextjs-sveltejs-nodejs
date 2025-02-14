import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; 
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

const TaskColumn = ({ status, title }) => {
  const { tasks, updateTaskStatus, deleteTask } = useContext(TaskContext);

  // Filter tasks by the current column's status
  const filteredTasks = tasks.filter((task) => task.status === status);

  const [, drop] = useDrop({
    accept: "TASK",  // Make sure this type matches in both Task and TaskColumn
    drop: (item) => {
      updateTaskStatus(item.id, status); // Update task status on drop
    },
  });

  return (
    <div 
      ref={drop} 
      className="flex flex-col w-full sm:w-64 p-4 bg-gray-200 rounded-md mb-4" // Added responsive width and margin-bottom
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
