import React, { useState, useEffect } from "react";
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

  const defineDownButtonDisplayValue = id => {
    const index = items.findIndex(i => i.id === id);
    return index < items.length - 2 ? "inline" : "none";
  };

  const addNewItem = name => {
    const id = ID();
    setItems(prev => [
      {
        id,
        value: (
          <CustomLi
            name={name}
            id={id}
            up={defineUpButtonDisplayValue}
            down={defineDownButtonDisplayValue}
            key={id}
            index={0}
            items={prev.length + 1}
            getIndex={getIndex}
            getItemsLength={getItemsLength}
          />
        )
      },
      ...prev
    ]);
  };

  const [items, setItems] = useState([
    { id: ID(), value: <DefaultLi addNewItem={addNewItem} key={ID()} /> }
  ]);

  // useEffect(() => {
  //   let index = 0;

  //   items.forEach(i => {
  //     console.log(i.value);
  //     i.value.index = index++;
  //   });
  // }, [items]);

  const getIndex = id => {
    return items.findIndex(i => i.id === id);
  };

  const getItemsLength = () => {
    return items.length;
  };

  return <ul>{items.map(i => i.value)}</ul>;
};

export default Ul;
