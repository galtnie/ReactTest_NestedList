import React, { useState, useEffect } from "react";

const CustomLi = props => {
  const [index, setIndex] = useState(props.index);
  const [items, setItems] = useState(props.items);

  useEffect(() => {
    setItems(props.getItemsLength());
    setIndex(props.getIndex(props.id));
  }, [props.items.length]);

  console.log(index, " ", items);
  return (
    <li>
      {props.name}
      <button style={{ display: props.down(props.id) }}> down </button>
      <button style={{ display: props.up(props.id) }}> up </button>
      <button> add sublist</button>
      <button> remove </button>
    </li>
  );
};

export default CustomLi;

// useEffect(() => {
//   let index = 0;

//   items.forEach(i => {
//     console.log(i.value);
//     i.value.index = index++;
//   });
// }, [items]);
