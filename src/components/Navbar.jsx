import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="m-2 flex justify-between items-center bg-sky-200 p-3 rounded-md font-semibold border-2 shadow">
            <Link to='/'>Library</Link>

            <button>Light Mode</button>
        </div>
    )
}

export default Navbar;