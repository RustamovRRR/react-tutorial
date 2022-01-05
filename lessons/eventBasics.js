// import React from "react";
// import ReactDOM from "react-dom";

// // CSS
// import "./index.css";

// // setup variables
// const books = [
//   {
//     id: 1,
//     title: "The Brothers Karamazov",
//     author: "Fyodor Dostoevsky",
//     url: "https://images-na.ssl-images-amazon.com/images/I/51DItJYatoL._SX324_BO1,204,203,200_.jpg",
//   },
//   {
//     id: 2,
//     title: "The Sandman: Act II",
//     author: "Neil Gaiman",
//     url: "https://m.media-amazon.com/images/I/51UYl4VBMRL.jpg",
//   },
// ];

// function Booklist() {
//   return (
//     <section>
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = ({ url, title, author }) => {
//   const clickHandler = () => {
//     alert("hello");
//   };
//   const clickHandler2 = (e) => {
//     console.log(e.target);
//   };
//   const complexHandler = (author) => {
//     console.log(author);
//   };
//   return (
//     <article>
//       <img src={url} alt="" />
//       <h1 onClick={clickHandler2}>{title}</h1>
//       <h4
//         onClick={() => {
//           complexHandler(author);
//         }}
//       >
//         {author}
//       </h4>
//       <button onClick={clickHandler}>alert hello</button>
//     </article>
//   );
// };

// ReactDOM.render(<Booklist />, document.getElementById("root"));
