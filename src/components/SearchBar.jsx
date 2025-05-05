import { useRef } from "react";

function SearchBar() {
    const search = useRef(null)

    return (
        <div className="m-2 mx-auto w-200 flex justify-between bg-sky-200 p-1 rounded-md font-semibold border-2 shadow">
            <input
                type="text"
                className="bg-sky-50 w-full p-1 rounded-md border-2"
                placeholder="Search.."
                ref={search}
            />
        </div>
    )
}

export default SearchBar;