import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <div>
    <div className={menuIcon ? "navbar active" : "navbar"}>
      <ul className="navbar-lists">
     
      </ul>
      <input placeholder="Search" />
    </div>
   
  </div>
   
  )
}

export default Navbar
