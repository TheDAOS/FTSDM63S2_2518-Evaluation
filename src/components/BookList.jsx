import { useSelector } from "react-redux";
import BookCard from "./BookCard";


function BookList() {
    const books = useSelector((state) => state.bookSlice.books)
    let pageNo = useSelector((state) => state.bookSlice.currentPage)
    const loading = useSelector((state) => state.bookSlice.loading)

    return (
        <div className="m-2 flex justify-center flex-wrap">
            {books?.slice((pageNo*10)-10, (pageNo*10)).map((book) => (
                <BookCard book={book} />
            ))}
        </div>
    )
}

export default BookList;