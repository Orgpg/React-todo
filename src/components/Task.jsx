import React from "react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const haldleRemoveTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };

  const onchangeHaldler = () => {
    doneTask(id);
  };

  return (
    <div className="flex justify-between items-center  border border-black rounded-lg p-2 mb-3">
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          onChange={onchangeHaldler}
          checked={isDone}
          className="size-4"
        />
        <p
          className={
            isDone ? "line-through" + " text-gray-400" + " text-sm" : ""
          }
        >
          {task}
        </p>
      </div>
      <button
        onClick={haldleRemoveTask}
        className="bg-red-500 text-sm text-white rounded-md font-bold px-3 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
