import styled from 'styled-components';

const NavigationBlock = styled('nav')`
  width: ${({ show }) => (show ? '20vw' : '0px')};
  min-height: 100vh;
`;
export { NavigationBlock };
