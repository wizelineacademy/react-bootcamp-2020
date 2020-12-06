import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import PageContext from "../../providers/Context/PageContext";
import Searchbar from "../Searchbar/Searchbar";

import "./Navbar.css";
import LoginButton from "../LoginButton/LoginButton";

const Navbar = () => {
  const { sideBar, setSideBar } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  
  const pages = SidebarData.map((data) => {
    const navItems = (
      <li key={data.text} className={data.estilo}>
        <Link to={data.path} className="menu-bars">
          {data.icons}
          <span>{data.text}</span>
        </Link>
      </li>
    );
      if(!data.loggedRequired){
        return navItems;
      }
      else if( userLogged.userStatus ){
        return navItems;
      }
  });
  return (
    <div>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <div>
            <Searchbar />
          </div>

          <LoginButton />
        </div>
        <nav className={sideBar ? "menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toogle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </Link>
            </li>
            {pages}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
