import React from 'react';

function Layout({ children }) {
  return (
    <main className="bg-white dark:bg-gray-800 h-full dark:text-white">{children}</main>
  );
}

export default Layout;
