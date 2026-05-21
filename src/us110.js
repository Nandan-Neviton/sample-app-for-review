import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      alert("Task cannot be empty");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: trimmedTask,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}