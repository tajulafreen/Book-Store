import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NWL6J2bcQLwcLHk7uDm7/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  },
);
export const addBook = createAsyncThunk(
  'addBooks/addBook',
  async (book, thunkAPI) => {
    try {
      const newBook = {
        itemId: uuidv4(),

      };
      const response = await axios.post(baseURL, book, newBook);

      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Post request failed');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseURL}/${itemId}`);

      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Could not delete book');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = Object.keys(action.payload).map((id) => ({
          id,
          ...action.payload[id],
        }));
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = true;
        state.books = Object.keys(action.payload).map((id) => ({
          id,
          ...action.payload[id],
        }));
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default booksSlice.reducer;
