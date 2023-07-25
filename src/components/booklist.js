import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './book';
import Input from './input';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} deleteBook={deleteHandler} />
      ))}
      <Input />
    </>
  );
};

export default Booklist;
