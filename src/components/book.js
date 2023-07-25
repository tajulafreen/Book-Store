import React from 'react';
import PropTypes from 'prop-types';
import './styles/style.css';

function Book({ book, deleteBook }) {
  return (
    <div>
      <li>
        <div>
          <p>Title:</p>
          {book.title}
        </div>
        <div>
          <p>Author:</p>
          {book.author}
        </div>
        <div>
          <p>Category:</p>
          {book.category}
        </div>
        <button type="button" onClick={() => deleteBook(book.id)}>
          Delete Book
        </button>
      </li>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
