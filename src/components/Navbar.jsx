import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../redux/bookSlice";

function Navbar() {
    let theme = useSelector((state) => state.bookSlice.theme)
    let dispatch = useDispatch();

    return (
        <div className="m-2 p-2 flex justify-between items-center bg-sky-200 rounded-md font-semibold border-2 shadow">
            <Link
                to='/'
            >Library</Link>

            <button
                className="bg-sky-950 px-2 py-1 rounded-md text-sky-50 shadow"
                onClick={() => dispatch(toggleTheme())}
            >
                {theme} Mode
            </button>
        </div>
    )
}

export default Navbar;