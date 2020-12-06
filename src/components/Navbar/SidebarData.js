import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    text: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    estilo: "nav-text",
    loggedRequired : false
  },
  {
    text: "Favourites",
    path: "/favs",
    icons: <FaIcons.FaFire />,
    estilo: "nav-text",
    loggedRequired : true
  }
];
