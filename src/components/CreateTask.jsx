import React from "react";

const CreateTask = () => {
  return (
    <div className="flex mb-2">
      <input
        type="text"
        placeholder="Add Task"
        className="flex-grow border p-2 border-black rounded-l-md"
      />
      <button className="bg-blue-500 text-white rounded-r-md px-3 py-3">Add Task</button>
    </div>
  );
};

export default CreateTask;
