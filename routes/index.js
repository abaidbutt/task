const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Task = require("../models/Task");
// Create a new task
router.post(
  "/tasks",
  [
    check("title").isLength({ min: 1 }).withMessage("Title is required"),
    check("description")
      .isLength({ min: 1 })
      .withMessage("Description is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, completed = false } = req.body;

    const newTask = new Task({
      title,
      description,
      completed,
    });

    try {
      const task = await newTask.save();
      res.status(201).json(task);
    } catch (err) {
      console.error("Error creating task:", err);
      res.status(500).json({ error: "Could not create task" });
    }
  }
);

// Get list of tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().exec();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Could not fetch tasks" });
  }
});

// Update a task's completion status
router.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  console.log(req.body);
  try {
    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).json({ error: "Could not update task" });
  }
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndRemove(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ error: "Could not delete task" });
  }
});

module.exports = router;
