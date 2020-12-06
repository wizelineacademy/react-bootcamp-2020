import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import './Layout.styles.css';

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  border-left: solid 1px #f1f1f1;
`;

function Layout({ children }) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <MainContainer>
          <Navbar />
          {children}
        </MainContainer>
      </div>
    </div>
  );
}

export default Layout;
