import React from "react";

const Dropdown = (data, setDifficultyChange) => {
  return (
    <div className="dropdown">
      <select onChange={(e) => setDifficultyChange(e.target.value)}>
        <option value="">Select Difficulty</option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
