import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        selectedBook: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
    }
})


export const fetchBooks = createAsyncThunk(
    'users/fetchBooks',
    async () => {
        const response = await axios.get('https://openlibrary.org/search.json?q=the');
        return response.data.docs
    },
)

// export const { fetchBooks } = bookSlice.actions;
export default bookSlice.reducer;