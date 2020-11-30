import React from 'react';
import Navbar from '../Nav/Navbar.component';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main">{children}</main>
    </>
  );
}
