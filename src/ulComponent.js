import React, { useState } from "react";
import DefaultLi from "./defaultLi";
import CustomLi from "./customLi";

const Ul = () => {
  const ID = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const addNewItem = name => {
    return setItems(prev => [<CustomLi key={ID()} name={name} />, ...prev]);
  };

  const [items, setItems] = useState([
    <DefaultLi key={ID()} addNewItem={addNewItem} />
  ]);

  return <ul>{items}</ul>;
};

export default Ul;
