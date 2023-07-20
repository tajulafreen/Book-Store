import React, { useState } from 'react';

const Book = () => {
  const [bookState, setBookState] = useState('');

  const Handledelete = () => {
    setBookState('Book deleted');
  };

  return (
    <div>
      <p>
        Individual Book State:
        {bookState}
      </p>
      <button type="button" onClick={Handledelete}>Remove</button>
    </div>
  );
};

export default Book;
