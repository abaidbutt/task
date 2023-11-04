import React, { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import Wrapper from "../view/Wrapper";
import Input from "../view/Input";
import Textarea from "../view/TextArea";
import Button from "../view/Button";

const TaskForm = () => {
  const { createTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = () => {
    createTask.mutate({
      title,
      description,
      completed: false,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <Wrapper>
      <h2>Create a New Task</h2>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleCreateTask}>Add Task</Button>
    </Wrapper>
  );
};

export default TaskForm;
