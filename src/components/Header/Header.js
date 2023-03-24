import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Add from './Add';
import './Navbar.css'
const Header = () => {
  return (
    <div>
      <Add />
      <div className="Header">
        <input placeholder="Search" />
        <Navbar />
      </div>
      <div className="dropdown">
        <button>
          <a href="/" className="aHome">
            HOME
          </a>
        </button>

        <div className="projects">
          <button>B.Tech</button>
          <ul>
            <li>
              <a href="/products">Lucknow</a>
            </li>
            <li>
              <a href="/products">Kolkata</a>
            </li>
            <li>
              <a href="/products">Lonavala</a>
            </li>
            <li>
              <a href="/products">Hyderabad</a>
            </li>
            <li>
              <a href="/products">Bangalore</a>
            </li>
            <li>
              <a href="/products">Mumbai</a>
            </li>
          </ul>
        </div>

        <div className="projects">
          <button>MBA</button>
          <ul>
            <li>
              <a href="/products">Lucknow</a>
            </li>
            <li>
              <a href="/products">Kolkata</a>
            </li>
            <li>
              <a href="/products">Lonavala</a>
            </li>
            <li>
              <a href="/products">Hyderabad</a>
            </li>
            <li>
              <a href="/products">Bangalore</a>
            </li>
            <li>
              <a href="/products">Mumbai</a>
            </li>
          </ul>
        </div>
        <div className="projects">
          <button>Medical</button>
          <ul>
            <li>
              <a href="/products">Lucknow</a>
            </li>
            <li>
              <a href="/products">Kolkata</a>
            </li>
            <li>
              <a href="/products">Lonavala</a>
            </li>
            <li>
              <a href="/products">Hyderabad</a>
            </li>
            <li>
              <a href="/products">Bangalore</a>
            </li>
            <li>
              <a href="/products">Mumbai</a>
            </li>
          </ul>
        </div>

        <div className="projects">
          <button>Agriculture</button>
          {/* <ul>
            <li>
              <a href="/products">Lucknow</a>
            </li>
            <li>
              <a href="/products">Kolkata</a>
            </li>
            <li>
              <a href="/products">Lonavala</a>
            </li>
            <li>
              <a href="/products">Hyderabad</a>
            </li>
            <li>
              <a href="/products">Bangalore</a>
            </li>
            <li>
              <a href="/products">Mumbai</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};
export default Header