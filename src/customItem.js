import React, { useState, useEffect } from "react";

const CustomItem = props => {
  const [sublist, setSublist] = useState(false);
  // const [items, setItems] = useState(props.items);

  // useEffect(() => {
  //   setItems(props.getItemsLength());
  //   setIndex(props.getIndex(props.id));
  // }, [props.items.length]);

  const up = props.index !== 0 ? true : false;
  const down = props.index !== props.itemsLength - 1 ? true : false;

  return (
    <li>
      {props.name}
      {up && <button>up</button>}
      {down && <button>down</button>}
      {<button>remove</button>}
      {sublist ? (
        <button
          onClick={() => {
            setSublist(false);
          }}
        >
          remove sublist
        </button>
      ) : (
        <button
          onClick={() => {
            setSublist(true);
          }}
        >
          {" "}
          add sublist{" "}
        </button>
      )}
    </li>
  );
};

export default CustomItem;

// useEffect(() => {
//   let index = 0;

//   items.forEach(i => {
//     console.log(i.value);
//     i.value.index = index++;
//   });
// }, [items]);
