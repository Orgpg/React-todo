import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2 ">
        Task List (Total Tasks:({tasks.length}) , Done({0}))
      </h3>
      {tasks.map((el) => (
        <Task removeTask={removeTask} job={el} key={el} />
      ))}
    </div>
  );
};

export default TaskList;
