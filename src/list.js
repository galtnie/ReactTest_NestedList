import React, { useState, useEffect } from "react";
import DefaultItem from "./defaultItem";
import CustomItem from "./customItem";
import { setID } from "./functions";

const List = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const checkName = () => {
    name.length > 0
      ? addNewItem(name)
      : alert("No item will be added without a name.");
  };

  const addNewItem = name => {
    const newItem = {
      name,
      id: setID(),
      sublist: false
    };

    setName("");
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

// const addNewItem = name => {
//   const id = setID();
//   setItems(prev => [
//     {
//       id,
//       value: (
//         <CustomLi
//           name={name}
//           id={id}
//           up={defineUpButtonDisplayValue}
//           down={defineDownButtonDisplayValue}
//           key={id}
//           index={0}
//           items={prev.length + 1}
//           getIndex={getIndex}
//           getItemsLength={getItemsLength}
//         />
//       )
//     },
//     ...prev
//   ]);
// };

// const defineUpButtonDisplayValue = id => {
//   const index = items.findIndex(i => i.id === id);
//   return index > 0 ? "inline" : "none";
// };

// const defineDownButtonDisplayValue = id => {
//   const index = items.findIndex(i => i.id === id);
//   return index < items.length - 2 ? "inline" : "none";
// };

// useEffect(() => {
//   let index = 0;

//   items.forEach(i => {
//     console.log(i.value);
//     i.value.index = index++;
//   });
// }, [items]);

// const getIndex = id => {
//   return items.findIndex(i => i.id === id);
// };

// const getItemsLength = () => {
//   return items.length;
// };

// <li>
//           {i.name}
//           {up && <button>up</button>}
//           {down && <button>down</button>}
//           {<button>remove</button>}
//           {i.sublist ? (
//             <button
//               onClick={() => {
//                 i.sublist = false;
//               }}
//             >
//               remove sublist
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 i.sublist = true;
//               }}
//             >
//               {" "}
//               add sublist{" "}
//             </button>
//           )}
//         </li>
