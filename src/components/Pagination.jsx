function Pagination() {
    return (
        <div className="m-2 mx-auto w-200 flex justify-end items-center gap-1 bg-sky-200 p-1 rounded-md font-semibold border-2 shadow">
            <button
                className="bg-sky-600 p-2 rounded-md text-sky-50 shadow"
            >
                Prev
            </button>
            <button
                className="bg-sky-600 p-2 rounded-md text-sky-50 shadow"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;