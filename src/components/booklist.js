import React from 'react';

const Booklist = () => {
  const books = [
    {
      id: 1, title: 'Book-1', author: 'Author-1', category: 'Category-1',
    },
    {
      id: 2, title: 'Book-2', author: 'Author-2', category: 'Category-2',
    },
    {
      id: 3, title: 'Book-3', author: 'Author-3', category: 'Category-3',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <div className="book-list" key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
