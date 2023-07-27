import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NWL6J2bcQLwcLHk7uDm7/books';

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(baseURL, newBook);
    return newBook;
  } catch (error) {
    console.error('Error posting book:', error.response.data);
    throw error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (item_id) => {
  try {
    await axios.delete(`${baseURL}/${item_id}`);
    return item_id;
  } catch (error) {
    console.error('Error removing book:', error);
    throw error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksData = action.payload;
        const booksArray = Object.keys(booksData).map((item_id) => ({
          item_id,
          ...booksData[item_id][0],
        }));
        state.isLoading = false;
        state.books = booksArray;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBook = action.payload;
        state.books.push(newBook);
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const item_idToRemove = action.payload;
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== item_idToRemove);
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
