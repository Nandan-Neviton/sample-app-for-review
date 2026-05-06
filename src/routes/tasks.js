const express = require("express");

const router = express.Router();

let tasks = [];

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title
  };

  tasks.push(task);

  res.status(201).json(task);
});

// router.delete("/:id", (req, res) => {
//   res.send("Task deleted");
// });
// router.delete("/:id", (req, res) => {
//   res.send("Task deleted");
// });
// router.delete("/:id", (req, res) => {
//   res.send("Task deleted");
// });
router.delete("/:id", (req, res) => {
  res.send("Task deleted");
});

module.exports = router;