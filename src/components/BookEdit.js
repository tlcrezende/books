import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book, onEdit, showEdit}) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title)
    showEdit(false);
  }
  
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" >Save</button>
    </form>
  );
}

export default BookEdit;
