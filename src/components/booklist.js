import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './book';
import Input from './input';

const Booklist = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const deleteHandler = (item_id) => {
    dispatch(removeBook(item_id));
  };

  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} deleteBook={() => deleteHandler(book.item_id)} />
      ))}
      <Input />
    </div>
  );
};

export default Booklist;
