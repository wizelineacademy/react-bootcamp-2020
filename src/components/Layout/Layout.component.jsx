import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
  const [setOpenDrawer] = useState(false);

  return (
    <div>
      <Navbar toggleDrawer={setOpenDrawer} />
      {children}
    </div>
  );
}

export default Layout;
