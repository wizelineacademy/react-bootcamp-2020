import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import styles from "./Navbar.module.css";

export const SidebarData = [
  {
    text: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    estilo: styles.navtext,
    loggedRequired : false
  },
  {
    text: "Favourites",
    path: "/favs",
    icons: <FaIcons.FaFire />,
    estilo: styles.navtext,
    loggedRequired : true
  }
];
