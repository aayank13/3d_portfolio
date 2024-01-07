import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p>AK</p>
        </NavLink>
        <nav className="flex text-lg font-medium">
        <NavLink to="/contact" className={( {isActive }) => isActive ? 'text-blue-500' : 'text-black-500' }>
            Contact
        </NavLink>

        </nav>

    </header>
  )
}

export default Navbar