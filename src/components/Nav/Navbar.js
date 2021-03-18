import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./style.css";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false); // current value not shows
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

/* <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="index.html">
    <h2>April Yang</h2>
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="contact.html">
          <h5>Contact</h5> */

/* <span class="sr-only">(current)</span> */

//   </a>
// </li>
// <li class="nav-item">
//   <a class="nav-link" href="portfolio.html">
//     <h5>Portfolio</h5>
//   </a>
// </li>

/* "About" is be actived when user is in this About page */

//       <li class="nav-item active">
//         <a class="nav-link" href="index.html">
//           <h5>About</h5>
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>;
