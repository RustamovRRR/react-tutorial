import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// setup variables

const firstBook = {
  title: "The Brothers Karamazov",
  author: "Fyodor Dostoevsky",
  imgURL:
    "https://images-na.ssl-images-amazon.com/images/I/51DItJYatoL._SX324_BO1,204,203,200_.jpg",
};
const secondBook = {
  title: "The Sandman: Act II",
  author: "Neil Gaiman",
  imgURL: "https://m.media-amazon.com/images/I/51UYl4VBMRL.jpg",
};

function Booklist() {
  return (
    <section>
      <Book
        url={firstBook.imgURL}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        url={secondBook.imgURL}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.url} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello Piter");
// };

ReactDOM.render(<Booklist />, document.getElementById("root"));
