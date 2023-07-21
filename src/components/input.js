import React from 'react';

const Input = () => (
  <div className="form-container">
    <h2>Add New Book</h2>
    <form>
      <input type="text" placeholder="Book title" id="title" />
      <input type="text" placeholder="Book author" id="author" />
      <input type="text" placeholder="Book category" id="category" />
      <button type="button" id="add-new-book">Add Book</button>
    </form>
  </div>
);

export default Input;
