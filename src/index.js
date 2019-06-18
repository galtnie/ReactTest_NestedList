// import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Ul from "./ulComponent";

const App = () => {
  return (
    <div>
      <Ul />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
