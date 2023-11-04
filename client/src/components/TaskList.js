import React from "react";
import { useTaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks?.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
