import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook, fetchBooks } from '../redux/books/booksSlice';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const submitHandler = async () => {
    if (!title || !author || !category) {
      setErrorMessage('Please fill in all the fields before adding the book.');

      return;
    }

    try {
      await dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
      setErrorMessage('');
      await dispatch(fetchBooks());
    } catch (error) {
      setErrorMessage('Error adding book. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder="Book category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        {errorMessage && <div className="text-danger error-message">{errorMessage}</div>}
        <button type="submit" id="add-new-book" onClick={submitHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};
export default Input;
