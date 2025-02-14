import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home"; // Import Home component

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskProvider>
        <Home /> {/* Render Home page here */}
      </TaskProvider>
    </DndProvider>
  );
}

export default App;
