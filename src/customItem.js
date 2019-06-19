import React, { useState } from "react";
import List from "./list";
import Button from "./button";

const CustomItem = props => {
  const [sublist, setSublist] = useState(false);

  const up = props.index !== 0 ? true : false;
  const down = props.index !== props.itemsLength - 1 ? true : false;

  return (
    <li>
      {props.name}
      {up && <Button alterList={props.alterList} id={props.id} action={"up"} />}
      {down && (
        <Button alterList={props.alterList} id={props.id} action={"down"} />
      )}
      {<Button alterList={props.alterList} id={props.id} action={"remove"} />}
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
