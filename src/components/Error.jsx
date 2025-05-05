import { useDispatch, useSelector } from "react-redux";
import { closeError } from "../redux/bookSlice";

function Error() {
    let error = useSelector((state) => state.bookSlice.error);
    let dispatch = useDispatch();

    return (
        <div className="m-2 mx-auto w-200 flex justify-around items-center gap-1 bg-red-400-200 p-1 rounded-md font-semibold border-2 shadow">
            {error}

            <button
                onClick={() => dispatch(closeError())}
            >
                X
            </button>
        </div>
    )
}

export default Error;