import { useState } from 'react';
import BookEdit from './BookEdit'

function BookShow({book, onDelete}) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteClick = () => {
    onDelete(book.id);
  }

  const editClick = () => {
    setShowEdit(!showEdit);
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book}/>
  }

  return <div className="book-show">
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