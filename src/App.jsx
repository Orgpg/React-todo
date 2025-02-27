import React from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  let tasks = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Try React",
    "Work on a project",
  ];

  return (
    <div className="p-10 font-mono ">
      <Heading />
      <CreateTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
