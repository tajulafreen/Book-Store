import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import './styles/icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <div>
    <header>

      <nav className="nav-bar">
        <a className="nav-brand" href="#/">Bookstore CMS</a>
        <ul className="nav-links">
          <li>
            <a className="nav-link active-link" href="#/"><Link to="/"><p>BOOKS</p></Link></a>
          </li>
          <li>
            <a className="nav-link" href="#/"><Link to="categories"><p>CATEGORIES</p></Link></a>
          </li>
        </ul>
        <button className="icon-button" type="button">
          <FontAwesomeIcon className="primary-color" icon={faUser} />
        </button>
      </nav>
    </header>
  </div>
);

export default Navbar;
