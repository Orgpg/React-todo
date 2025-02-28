import React from "react";

const Task = ({ job, removeTask }) => {
  const haldleRemoveTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(job);
    }
  };

  return (
    <div className="flex justify-between items-center  border border-black rounded-lg p-2 mb-3">
      <p>{job}</p>
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
