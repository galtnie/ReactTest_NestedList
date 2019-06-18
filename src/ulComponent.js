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

  const defineUpButtonDisplayValue = id => {
    const index = items.findIndex(i => i.id === id);
    return index > 0 ? "inline" : "none";
  };

  const addNewItem = name => {
    const id = ID();
    const newItem = {
      id,
      value: (
        <CustomLi
          name={name}
          id={id}
          index={items}
          up={defineUpButtonDisplayValue}
        />
      )
    };

    setItems(prev => [newItem, ...prev]);
  };

  const [items, setItems] = useState([
    { id: ID(), value: <DefaultLi addNewItem={addNewItem} /> }
  ]);

  return <ul>{items.map(i => i.value)}</ul>;
};

export default Ul;
