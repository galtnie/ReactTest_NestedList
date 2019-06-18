import React, { useState } from "react";

const DefaultLi = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    name.length > 0
      ? console.log(name)
      : alert("No item will be added without a name.");
  };

  return (
    <div>
      <form>
        <input
          value={name}
          type="text"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default DefaultLi;
