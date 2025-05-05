import BookList from "./BookList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function ShowBooks() {
    return (
        <div>
            <SearchBar />
            <Pagination />
            <BookList />
        </div>
    )
}

export default ShowBooks;