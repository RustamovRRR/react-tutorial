const Book = ({ url, title, author }) => {
  const clickHandler = () => {
    alert("hello");
  };
  const clickHandler2 = (e) => {
    console.log(e.target);
  };
  const complexHandler = (author) => {
    console.log(author);
  };
  return (
    <article>
      <img src={url} alt="" />
      <h1 onClick={clickHandler2}>{title}</h1>
      <h4
        onClick={() => {
          complexHandler(author);
        }}
      >
        {author}
      </h4>
      <button onClick={clickHandler}>alert hello</button>
    </article>
  );
};

export default Book;