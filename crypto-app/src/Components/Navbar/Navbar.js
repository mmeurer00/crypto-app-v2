import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
            <div className="nav-logo">
                    {/* <label id="switch" class="switch">
                    <input type="checkbox" onChange={() => {document.body.classList.toggle('dark')}} id="slider"/>
                    <span class="slider round"></span>
                    </label> */}
                    <NavLink exact to='/'>
                    </NavLink>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/preferences"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Preferences
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/dashboard"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Dashboard
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/Login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Login
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/Signup"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Signup
                </NavLink>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;