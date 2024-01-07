import { NavLink } from "react-router-dom";
import aayank from "../assets/aayank_image.png";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-12 h-12 items-center justify-center flex">
            <img class="transition-all sticky motion-reduce:transition-none duration-1000 animate-pulse motion-reduce:animate-none w-12 hover:animate-spin ease-in-out rounded-full" src={aayank} loading="lazy" decoding="async" alt="Headshot"></img>
            <h2 class="ml-2 text-xl font-medium">Aayan</h2>
        </NavLink>
        <nav className="flex text-lg font-medium hover:underline">
        <NavLink to="/contact" className={( {isActive }) => isActive ? 'text-blue-500' : 'text-black-500' }>
            Contact
        </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;