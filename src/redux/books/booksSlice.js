import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: { Books: [] },
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
