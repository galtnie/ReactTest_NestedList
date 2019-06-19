import React from "react";
import ReactDOM from "react-dom";
import List from "./list";

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
