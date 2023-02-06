import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit'

function BookShow({book}) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useContext(BooksContext);

  const deleteClick = () => {
    deleteBookById(book.id);
  }

  const editClick = () => {
    setShowEdit(!showEdit);
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} showEdit={setShowEdit}/>
  }

  return <div className="book-show">
    <img 
      alt="books"
      src={`https://picsum.photos/seed/${book.id}/300/200`}
    />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={editClick}>
          Edit
        </button>
        <button className="delete" onClick={deleteClick}>
          Delete
        </button>
      </div>
    </div>;
};

export default BookShow;