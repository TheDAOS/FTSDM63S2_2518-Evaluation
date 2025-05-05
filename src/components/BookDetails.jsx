import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

async function getDetails(id, setter) {
    try {
        const response = await axios.get('https://openlibrary.org/search.json?q=' + id)
        let data = response.data.docs
        setter(data[0])
    } catch (error) {
        console.log(error);
    }
}

function BookDetails() {
    let { id } = useParams();
    let [bookData, setBookData] = useState(null)

    useEffect(() => {
        getDetails(id, setBookData);
    }, [])

    console.log(bookData);

    return (
        <>
            {bookData && <div
                className="m-2 p-2 w-150 bg-sky-200 rounded-md border-2 shadow"
            >
                <img
                    className="mx-auto rounded-md mb-5"
                    src={`https://covers.openlibrary.org/b/olid/${bookData.cover_edition_key}-L.jpg`}
                    alt="Loading Image"
                />
                <span className='my-1 text-2xl font-semibold'>{bookData.title}</span>
                <div>
                    <span className='font-semibold me-2'>
                        Author:
                    </span>
                    {bookData.author_name.join()}
                </div>
            </div >}
        </>
    )
}

export default BookDetails;