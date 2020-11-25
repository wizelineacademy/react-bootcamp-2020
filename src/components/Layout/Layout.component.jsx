import React from 'react';
import Navbar from '../Navbar/Navbar.component';
import './Layout.styles.css';

function Layout({ children }) {
  return <main className="container">
    <Navbar/>
    {children}
  </main>;
}

export default Layout;
