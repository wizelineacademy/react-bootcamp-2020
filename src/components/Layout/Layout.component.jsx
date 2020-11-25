import React from 'react';
import Sidebar  from '../Sidebar'
import Navbar  from '../Navbar'


import './Layout.styles.css';

function Layout({ children }) {
  return (
    <div>
         <div style={{display: "flex"}}>
              <Sidebar/>
              <main className="container">
              <Navbar/>
                    {children}
              </main>
          </div>
    </div>
        )
}

export default Layout;
