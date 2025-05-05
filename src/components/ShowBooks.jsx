import BookList from "./BookList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { fetchBooks } from '../redux/bookSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import LoadingPage from "./LoadingPage";

function ShowBooks() {
    const { loading } = useSelector((state) => state.bookSlice)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [])

    return (
        <div>
            <SearchBar />
            <Pagination />
            {loading && <LoadingPage />}
            {!loading && <BookList />}
        </div>
    )
}

export default ShowBooks;