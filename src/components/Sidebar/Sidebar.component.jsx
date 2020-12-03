import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../providers/Auth';
import User from '../User';
import Logo from '../Logo';
import './Sidebar.styles.css';

const SidebarParent = styled.div`
  width: 250px;
  height: 100vh;
  .active {
    background-color: ${(props) => props.theme.backgroundItem};
  }
`;

const SidebarItem = styled.div`
  display: flex;
  padding: 15px;
  align-items: baseline;
`;

const ItemContainer = styled.div`
  .label {
    &-active {
      color: ${(props) => props.theme.itemColor};
    }
  }
  .icon {
    &-active {
      color: ${(props) => props.theme.itemColor};
    }
  }
`;

const Items = [
  {
    name: 'Home',
    route: '/',
    needsAuth: false,
    icon: faHome,
    active: true,
  },
  {
    name: 'Favorites',
    route: '/favorites',
    needsAuth: true,
    icon: faHeart,
    active: false,
  },
];

function Sidebar() {
  const { authenticated } = useAuth();
  const [items, setItems] = useState(Items);

  const setActive = (value) => {
    if (items) {
      const newItem = [];
      items.map((item) => {
        newItem.push({
          ...item,
          active: item.name === value,
        });
      });
      setItems(newItem);
    }
  };

  return (
    <>
      <SidebarParent>
        <Logo />
        <User />
        <div className="sidebar-items">
          {items
            .filter((item) => !item.needsAuth || (item.needsAuth && authenticated))
            .map((item) => {
              return (
                <ItemContainer key={item.name} className={item.active ? 'active' : ''}>
                  <Link to={item.route} onClick={() => setActive(item.name)}>
                    <SidebarItem>
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={item.active ? ' icon icon-active' : 'icon'}
                      />
                      <span className={item.active ? ' label label-active' : 'label'}>
                        {item.name}
                      </span>
                    </SidebarItem>
                  </Link>
                </ItemContainer>
              );
            })}
        </div>
      </SidebarParent>
    </>
  );
}

export default Sidebar;
