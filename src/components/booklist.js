import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './book';
import Input from './input';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const deleteHandler = async (id) => {
    try {
      await dispatch(removeBook(id));
      dispatch(fetchBooks());
      return id;
    } catch (error) {
      return error;
    }
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(books)) {
    return <p>No books available.</p>;
  }

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            deleteBook={deleteHandler}
          />
        </div>
      ))}
      <Input />
    </>
  );
};

export default Booklist;
