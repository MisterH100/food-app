import { Link } from "react-router-dom";
import logo from '../assets/sizzle svg.svg';

function NavBar() {
    return (
        <nav className="w-full bg-[#bdbdbd]">
            <Link to="/">
                <div className="w-full h-[300px] bg-[#fff] m-auto">
                    <img
                        className="h-[250px] m-auto object-fit"
                        src={logo}
                        alt="sizzle logo"
                    />
                </div>
            </Link>
        </nav>
    )
}

export default NavBar;