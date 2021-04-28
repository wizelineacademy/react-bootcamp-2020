import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Drawer from 'react-modern-drawer';

const DrawerNav = ({ isOpen, toggleDrawer, home, favourite }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
      <div className="grid grid-rows-2 grid-flow-col gap-4 divide-y divide-light-gray-400">
        <div className="pt-4 pl-2">
          <button type="button" onClick={home}>
            Home
          </button>
        </div>
        {isAuthenticated && (
          <div className="pt-0 pl-2">
            <button type="button" onClick={favourite}>
              Favourites
            </button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerNav;
