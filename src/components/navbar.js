import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header>
      <h1>Bookstore</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </nav>
    </header>
  </div>
);

export default Navbar;
