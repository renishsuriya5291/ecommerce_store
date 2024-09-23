import React, { useState } from "react";

const TextAreaComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value); // Log value on change
  };

  return (
    <div className="flex flex-col ">
      <label htmlFor="textarea" className="mb-2 text-lg font-semibold">
        Your Message:
      </label>
      <textarea
        id="textarea"
        value={value}
        onChange={handleChange}
        placeholder="Type your message here..."
        className="h-32 p-2 border transition-colors border-gray-300 rounded-lg focus:outline-black"
      />
    </div>
  );
};

export default TextAreaComponent;
