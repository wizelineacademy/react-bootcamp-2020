import React from "react";
import styled from 'styled-components'
import { Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../providers/Auth';



const SidebarParent = styled.div`
  background: #c34a36;
  width: 250px;
  height: 100vh;
`;

const Items = [
    {
        name: "Home",
        route: '/',
        needsAuth: false
    },
    {
        name: "Favorites",
        route: '/favorites',
        needsAuth: true
    }
]

function Sidebar(props) {

    const { authenticated, logout, login} = useAuth();
    const history = useHistory();

    function deAuthenticate(event) {
        event.preventDefault();
        logout();
        history.push('/');
      }
    
    function authenticate(event) {
        event.preventDefault();
        login();
        history.push('/');
      }

    return (
        <>
            <SidebarParent>
                <div>Logo</div>
                <div> Usuario 
                <Link to="/" onClick={deAuthenticate}>
                      ← logout
                </Link>

                <Link to="/" onClick={authenticate}>
                      ← login
                </Link>
                </div>
                <div> 
                {
                    Items.filter(item => !item.needsAuth || (item.needsAuth && authenticated) ).map((item, index)=> {
                      
                      return (
                            <Link to={item.route}> 
                                <div key={item.name}>
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        );
                    })
                } </div>
            </SidebarParent>
        </>
    );
}

export default Sidebar;