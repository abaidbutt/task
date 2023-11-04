import { useTaskContext } from "../contexts/TaskContext";
import Btn from "../view/Btn";

function DarkModeToggle() {
  const { toggleDarkMode } = useTaskContext();

  return <Btn onClick={toggleDarkMode}>Toggle Dark Mode</Btn>;
}

export default DarkModeToggle;
