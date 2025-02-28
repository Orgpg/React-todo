import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  let [tasks, setTasks] = useState([
    { id: 1, task: "Learn HTML", isDone: true },
    { id: 2, task: "Learn CSS", isDone: false },
    { id: 3, task: "Learn JavaScript", isDone: true },
    { id: 4, task: "Try React", isDone: false },
    { id: 5, task: "Work on a project", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="w-full border text-white border-white rounded-lg p-5 max-w-xl mt-10 flex flex-col mx-auto px-4 sm:px-6 lg:px-8 font-mono">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
