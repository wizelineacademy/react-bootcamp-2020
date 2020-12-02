import React from 'react';

import styled from 'styled-components';

const Container = styled.main`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.contrast};

`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
