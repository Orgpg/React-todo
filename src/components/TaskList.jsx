import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, doneTask }) => {
  return (
    <div>
      <h3 className="text-md font-bold mb-2 ">
        Task List (Total Tasks:({tasks.length}) , Done(
        {tasks.filter((el) => el.isDone).length}))
      </h3>
      {tasks.map((el) => (
        <Task
          doneTask={doneTask}
          removeTask={removeTask}
          job={el}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
