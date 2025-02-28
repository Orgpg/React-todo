import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  let [tasks, setTasks] = useState([
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Try React",
    "Work on a project",
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="p-10 font-mono ">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
