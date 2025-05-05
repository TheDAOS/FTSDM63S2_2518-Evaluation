import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../redux/bookSlice";

function Pagination() {
    let pageNo = useSelector((state) => state.bookSlice.currentPage);
    let dispatch = useDispatch();

    return (
        <div className="m-2 mx-auto w-200 flex justify-end items-center gap-1 bg-sky-200 p-1 rounded-md font-semibold border-2 shadow">
            <button
                className="bg-sky-600 p-2 rounded-md text-sky-50 shadow"
                onClick={() => dispatch(prevPage())}
            >
                Prev
            </button>
            <span className="w-5 text-center">
                {pageNo}
            </span>
            <button
                className="bg-sky-600 p-2 rounded-md text-sky-50 shadow"
                onClick={() => dispatch(nextPage())}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;