import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>John Doe</h1>;
const Message = () => {
  return <p>this is my message</p>;
};

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello Piter");
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
