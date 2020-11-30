import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import User  from '../User'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.styles.css';




const SidebarParent = styled.div`
  width: 250px;
  height: 100vh;
  border-right: solid 1px #F1F1F1;
`;

const SidebarItem = styled.div`
    display: flex;
    padding: 15px;
    align-items: baseline;
`;



const Items = [
    {
        name: "Home",
        route: '/',
        needsAuth: false,
        icon: faHome
    },
    {
        name: "Favorites",
        route: '/favorites',
        needsAuth: true,
        icon: faHeart
    }
]

function Sidebar(props) {

    const { authenticated } = useAuth();

    return (
        <>
            <SidebarParent>
                <Logo/>
                <User/>
                <div className="sidebar-items"> 
                {
                    Items.filter(item => !item.needsAuth || (item.needsAuth && authenticated) ).map((item, index)=> {
                      
                      return (
                          <div key={item.name} className={`sidebar-item ${ index === 0 ? "active" : "" }`}>
                                <Link to={item.route}> 
                                    <SidebarItem >
                                        <FontAwesomeIcon icon={ item.icon }/>
                                        <span>{item.name}</span>
                                    </SidebarItem>
                                </Link>
                            </div>
                        );
                    })
                } </div>
            </SidebarParent>
        </>
    );
}

export default Sidebar;