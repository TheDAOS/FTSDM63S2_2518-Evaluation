import { useNavigate } from "react-router";

function BookCard({ book }) {
    let navigate = useNavigate();

    return (
        <div
            className="m-2 p-2 w-70 h-150 bg-sky-200 rounded-md border-2 shadow"
            onClick={
                () => navigate(`/book/${book.title}`)
            }
        >
            <img
                className="mx-auto h-50 rounded-md mb-5"
                src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
                alt="Loading Image"
            />
            <span className='my-1 text-2xl font-semibold'>{book.title}</span>
            <div>
                <span className='font-semibold me-2'>
                    Author:
                </span>
                {book.author_name.join()}
            </div>
        </div >
    )
}

export default BookCard;