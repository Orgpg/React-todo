import React, { useState } from "react";

const CreateTask = ({addTask}) => {
  const [job, setJob] = useState("");
  const haldlerOnChange = (e) => {
    setJob(e.target.value);
  };

  const haldleAddTaskBtn = () => {
    addTask(job);
    setJob("");
  };

  return (
    <div className="flex mb-2">
      <input
        type="text"
        placeholder="Add Task"
        className="flex-grow border p-2 border-black rounded-l-md"
        value={job}
        onChange={haldlerOnChange}
      />
      <button onClick={haldleAddTaskBtn} className="bg-blue-500 text-white rounded-r-md px-3 py-3">
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
