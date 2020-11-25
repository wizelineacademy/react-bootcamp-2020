import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar/Sidebar.component';
import './MenuButton.style.css';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <MenuOutlined className="hamburger-icon" onClick={openSidebar} />
      <Sidebar isOpen={isOpen} toggle={openSidebar} />
    </>
  );
}

export default MenuButton;
