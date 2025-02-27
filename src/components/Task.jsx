import React from "react";

const Task = ({ job }) => {
  return (
    <div className="border border-black rounded-lg p-2 mb-3">
      <p>{job}</p>
    </div>
  );
};

export default Task;
