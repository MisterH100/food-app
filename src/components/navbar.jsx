import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="w-full h-[150px] bg-[#bdbdbd]">
            <Link to="/">
                <h1 className="text-center text-[4rem] m-auto logo">
                Sizzle
                </h1>
            </Link>

            <p className="text-center text-[1.5rem] text-black m-auto">the best place for bbqs</p>
        </nav>
    )
}

export default NavBar;