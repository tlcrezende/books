import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onEdit, showEdit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    showEdit(false);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
