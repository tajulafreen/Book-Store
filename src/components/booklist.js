import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './book';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} deleteBook={deleteHandler} />
      ))}
    </div>
  );
};

export default Booklist;
