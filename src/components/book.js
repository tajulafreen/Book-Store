import React from 'react';
import PropTypes from 'prop-types';
import './styles/style.css';
import '../App.css';
import './styles/icons.css';

function Book({ book, deleteBook }) {
  return (
    <div>
      <div>
        <ul className="books">
          <li>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h4 className="book-category">{book.category}</h4>
                  <h2 className="book-title">{book.title}</h2>
                  <h6 className="book-author">{book.author}</h6>
                  <div className="action-buttons">
                    <button className="button-outline" type="button">Comments</button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button" onClick={() => deleteBook(book.item_id)}>
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress-start">
                    <p className="percent-complete">8%</p>
                    <p className="completed">completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">Chapter 3 : A Lesson Learned</p>
                    </div>
                    <div>
                      <button className="primary-button" type="button">UPDATE PROGRESS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>

    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
