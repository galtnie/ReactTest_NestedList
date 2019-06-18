import React, { useState } from "react";

const DefaultLi = ({ addNewItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    name.length > 0
      ? addNewItem(name)
      : alert("No item will be added without a name.");

    setName("");
  };

  return (
    <li>
      <input
        value={name}
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={e => {
          handleSubmit();
        }}
      >
        Add
      </button>
    </li>
  );
};

export default DefaultLi;
