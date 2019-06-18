import React from "react";
import DefaultLi from "./defaultLi";
import CustomLi from "./customLi";

const Ul = () => {
  const addNewLi = () => {};

  return (
    <ul>
      <DefaultLi addNewLi={addNewLi} />
    </ul>
  );
};

export default Ul;
