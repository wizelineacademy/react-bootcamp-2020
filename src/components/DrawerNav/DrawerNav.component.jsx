import React from 'react';

import Drawer from 'react-modern-drawer';
// import { useHistory } from 'react-router';
import useUser from '../../hooks/userUser';

const DrawerNav = ({ isOpen, toggleDrawer, home, favourite }) => {
  const { isLogged } = useUser();

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
      <div className="grid grid-rows-2 grid-flow-col gap-4 divide-y divide-light-gray-400">
        <div className="pt-4 pl-2">
          <button type="button" onClick={home}>
            Home
          </button>
        </div>
        {isLogged && (
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
