// App.js
import React, { useContext } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import DarkModeToggle from "./components/DarkModeToggle";
import { useTaskContext } from "./contexts/TaskContext";
import Box from "./view/Box";
import Container from "./view/Container";
function App() {
  const { isDarkMode } = useTaskContext();

  return (

    
    <Container
      maxWidth="md"
      className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <DarkModeToggle />
      <h1>Task Manager</h1>
      <TaskForm />
      <Box>
        <TaskFilter />
        <TaskList />
      </Box>
    </Container>
  );
}

export default App;
