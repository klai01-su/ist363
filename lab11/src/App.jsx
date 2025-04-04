import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Lab 11", completed: false },
    { id: 2, text: "Review JSX Events and State", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const completeTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task"/>
        <button type="submit">Add Task</button>
      </form>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => completeTask(task.id)}>&#10060;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;