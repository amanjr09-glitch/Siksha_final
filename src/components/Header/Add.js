import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'



const Add = () => {
  return (
      <div id="add">
         {/* <NavLink to="/">
          <img src="" alt="my logo img" className="logo" />
        </NavLink> */}
            <ul>
              <li>
                <a href="/products">Top Courses</a>
              </li>
              <li>
                <a href="/products">Top Colleges</a>
              </li>
              <li>
                <a href="/products">Entrance Exams</a>
              </li>
              <li>
                <a href="/products">Admissions 2023</a>
              </li>
              <li>
                <a href="/products">News</a>
              </li>
              <li>
                <a href="/products">More</a>
              </li>
            </ul>
          </div>
  )
}

export default Add
