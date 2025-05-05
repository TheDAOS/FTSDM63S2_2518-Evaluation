import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        selectedBook: null,
        loading: false,
        error: null,
        currentPage: 1,
        theme: 'Light',
    },
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === 'Light')
                state.theme = "Dark";
            else
                state.theme = 'Light'
        },
        nextPage: (state) => {
            if (state.currentPage <= 10) {
                state.currentPage++;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
    },
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

export const { nextPage, prevPage, toggleTheme } = bookSlice.actions;
export default bookSlice.reducer;