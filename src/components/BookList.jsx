import { useSelector } from "react-redux";
import BookCard from "./BookCard";


function BookList() {
    const books = useSelector((state) => state.bookSlice.books)

    console.log(books)

    return (
        <div className="m-2 flex justify-center flex-wrap">
            {books?.map((book) => (
                <BookCard book={book}/>
            ))}
        </div>
    )
}

export default BookList;