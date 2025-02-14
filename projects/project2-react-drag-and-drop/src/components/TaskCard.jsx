import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa"; // Import trash icon from react-icons

const TaskCard = ({ task, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-3 mb-2 bg-white rounded shadow-md cursor-pointer transition-all flex justify-between items-center ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {/* Task Title */}
      <span>{task.title}</span>

      {/* Trash Icon */}
      <button
        onClick={() => onDelete(task.id)} // Call onDelete when trash icon is clicked
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskCard;
