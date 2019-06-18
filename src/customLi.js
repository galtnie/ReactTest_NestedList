import React from "react";

const CustomLi = props => {
  return (
    <li>
      {props.name}
      <button> down </button>
      <button style={{ display: props.up(props.id) }}> up </button>
      <button> add sublist</button>
      <button> remove </button>
    </li>
  );
};

export default CustomLi;
