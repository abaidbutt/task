import React, { useContext } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import ListItem from "../view/ListItem";

function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTaskContext();

  return (
    <ListItem key={task.id} className={task.completed ? "completed" : ""}>
      <span
        onClick={() =>
          updateTask.mutate({
            id: task._id,
            body: { completed: !task.completed },
          })
        }
      >
        {task.completed ? "✔" : "◻"}
      </span>
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask.mutate(task._id)}>Delete</button>
    </ListItem>
  );
}

export default TaskItem;
