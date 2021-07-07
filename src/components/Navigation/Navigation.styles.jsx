import styled from 'styled-components';

const NavigationBlock = styled('nav')`
  width: ${({ show, theme }) => (show ? theme.navWidth : '0px')};
  min-height: 100vh;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.shadows};
  background-color: ${({ theme }) => theme.navBg};
  overflow: hidden;
  transition: 0.6s;
  ul.navlist {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export { NavigationBlock };
