import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className="container">
            <div className="navbar-row">
                <div className="navbar-logo">
                    <img src="Images/Logo.png" alt="Logo" />
                </div>
                <div className="navbar-menu">
                    <li>
                        <NavLink to="/" end>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" end>
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" end>
                        Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" end>
                        Tour
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" end>
                        Blog
                        </NavLink>
                    </li>
                </div>
                <div className="navbar-buttons">
                    <Link className='login' to={"#"}>Login</Link>
                    <Link className='signup' to={"#"}>Sign up</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar