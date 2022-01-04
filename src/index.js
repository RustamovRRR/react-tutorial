import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>My name is Rustam and this is my first component</h4>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
