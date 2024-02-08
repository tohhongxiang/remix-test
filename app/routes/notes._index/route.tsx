import { Link } from "@remix-run/react";

export default function NotesIndex() {
    return (
        <>
            <h1>Notes</h1>
            <ul className="flex flex-col">
                <li>
                    <Link to="/notes/123">Note 123</Link>
                </li>
                <li>
                    <Link to="/notes/2323">Note 2323</Link>
                </li>
                <li>
                    <Link to="/notes/11">Note 11</Link>
                </li>
                <li>
                    <Link to="/notes/44">Note 44</Link>
                </li>
            </ul>
        </>
    );
}
