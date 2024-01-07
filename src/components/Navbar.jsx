import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-12 h-12 items-center justify-center flex">
            <img alt="logo" src="./public/aayank_image.png" className="rounded-full rotate-on-hover inline-block shadow-md"></img>
        </NavLink>
        <nav className="flex text-lg font-medium">
        <NavLink to="/contact" className={( {isActive }) => isActive ? 'text-blue-500' : 'text-black-500' }>
            Contact
        </NavLink>

        </nav>

    </header>
  )
}

export default Navbar;