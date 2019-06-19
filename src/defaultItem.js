import React, { useState } from "react";
import { setID } from "./functions";

const DefaultItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [id] = useState(setID());

  const checkName = () => {
    name.length > 0
      ? addItem(name)
      : alert("No item will be added without a name.");

    setName("");
  };

  return (
    <li key={id}>
      <input
        value={name}
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={e => {
          checkName();
        }}
      >
        Add
      </button>
    </li>
  );
};

export default DefaultItem;
