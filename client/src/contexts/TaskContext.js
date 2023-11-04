import React, { createContext, useContext, useMemo, useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
axios.defaults.baseURL = "http://localhost:8000/api";
// Create a context for the task data and actions
export const TaskContext = createContext();

// Custom hook to use the TaskContext

const TaskProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode);
  };

  const queryClient = useQueryClient();

  // Fetch tasks from the server
  const fetchTasks = async () => {
    const response = await axios.get("/tasks");
    return response.data;
  };

  const { data: tasks } = useQuery("tasks", fetchTasks);

  const allTasks = useMemo(() => {
    return filter === "all"
      ? tasks
      : tasks.filter((item) =>
          filter === "completed" ? item.completed : !item.completed
        );
  }, [filter, tasks]);

  // Create a new task
  const createTask = useMutation(
    async (newTask) => {
      const response = await axios.post("/tasks", newTask);
      return response.data;
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  // Update task completion status
  const updateTask = useMutation(
    async (taskId) => {
      const response = await axios.put(`/tasks/${taskId.id}`, taskId.body);
      return response.data;
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  // Delete a task
  const deleteTask = useMutation(
    async (taskId) => {
      await axios.delete(`/tasks/${taskId}`);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  return (
    <TaskContext.Provider
      value={{
        tasks: allTasks,
        createTask,
        updateTask,
        deleteTask,
        isDarkMode,
        toggleDarkMode,
        setFilter,
        filter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
export default TaskProvider;
