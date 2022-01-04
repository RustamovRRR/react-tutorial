import React from "react";
import ReactDOM from "react-dom";

function Booklist() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51DItJYatoL._SX324_BO1,204,203,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Brothers Karamazov</h1>;
const Author = () => <h4>Fyodor Dostoevsky</h4>;

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello Piter");
// };

ReactDOM.render(<Booklist />, document.getElementById("root"));
