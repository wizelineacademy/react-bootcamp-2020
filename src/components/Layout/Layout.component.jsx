import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';

function Layout() {
  const [setOpenDrawer] = useState(false);

  return (
    <div>
      <Navbar toggleDrawer={setOpenDrawer} />
    </div>
  );
}

export default Layout;
