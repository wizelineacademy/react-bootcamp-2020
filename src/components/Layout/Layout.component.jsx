import React from 'react';

import './Layout.styles.css';

function Layout({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Layout;
