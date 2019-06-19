import React, { useState } from "react";
import List from "./list";

const CustomItem = props => {
  const [sublist, setSublist] = useState(false);

  const up = props.index !== 0 ? true : false;
  const down = props.index !== props.itemsLength - 1 ? true : false;

  return (
    <li>
      {props.name}
      {up && (
        <button
          onClick={() => {
            props.alterList(props.id, "up");
          }}
        >
          up
        </button>
      )}
      {down && (
        <button
          onClick={() => {
            props.alterList(props.id, "down");
          }}
        >
          down
        </button>
      )}
      {
        <button
          onClick={() => {
            props.alterList(props.id, "erase");
          }}
        >
          remove
        </button>
      }
      {
        <button
          onClick={() => {
            setSublist(!sublist);
          }}
        >
          {`${sublist ? "remove" : "add"} sublist`}
        </button>
      }
      {sublist && <List />}
    </li>
  );
};

export default CustomItem;
