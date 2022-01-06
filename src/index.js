import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// setup variables
import { data } from "./data";
import Book from "./book";

function Booklist() {
  return (
    <section>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
