import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// setup variables
const books = [
  {
    id: 1,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    url: "https://images-na.ssl-images-amazon.com/images/I/51DItJYatoL._SX324_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "The Sandman: Act II",
    author: "Neil Gaiman",
    url: "https://m.media-amazon.com/images/I/51UYl4VBMRL.jpg",
  },
];

function Booklist() {
  return (
    <section>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ url, title, author }) => {
  return (
    <article>
      <img src={url} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
