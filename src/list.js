import React, { useState, useEffect } from "react";
import DefaultItem from "./defaultItem";
import CustomItem from "./customItem";
import { setID } from "./functions";

const List = () => {
  const [items, setItems] = useState([]);

  const addNewItem = name => {
    const newItem = {
      name,
      id: setID(),
      sublist: false
    };

    setItems(prev => [newItem, ...prev]);
  };

  const renderItems = items => {
    return items.map((i, index) => {
      return (
        <CustomItem
          name={i.name}
          index={index}
          key={i.id}
          itemsLength={items.length}
          sublist={i.sublist}
        />
      );
    });
  };

  return (
    <ul>
      {renderItems(items)}
      <DefaultItem addItem={addNewItem} />
    </ul>
  );
};

export default List;
