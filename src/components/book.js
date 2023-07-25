import React from 'react';
/* eslint-disable react/prop-types */
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
        <button type="button" onClick={() => deleteBook(book.id)}>Delete Book</button>
      </li>
    </div>
  );
}
export default Book;
