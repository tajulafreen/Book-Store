import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Navbar;
