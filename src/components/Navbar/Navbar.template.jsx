import styled from 'styled-components';

const Nav = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--font-color);
  padding: 10px;
  height: 5vh;
  font-size: calc(var(--font-size) * 1.5);
`;

const NavOpen = styled.div`
  cursor: pointer;
  transition: color ease-in-out 0.2s;

  &:hover {
    color: var(--accent-font-color);
  }
`;

const NavMenu = styled.nav`
  background-color: var(--background);
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  z-index: 100;
  ${(props) => {
    if (props.active) {
      return `
        left: 0;
        transition: all ease-out 0.8s;
      `;
    }
    return `
        left: -100%;
        transition: all ease-out 1s;
      `;
  }}
`;

const NavMenuContainer = styled.ul`
  padding: 0px;
  padding-top: 20px;
  margin: 0;
`;

const NavMenuItem = styled.li`
  padding: 10px;
  width: 100%;
  list-style: none;
  font-size: calc(var(--font-size) * 1.5);
  color: var(--font-color);
  cursor: pointer;
  transition: color ease-in-out 0.2s;

  & > a {
    color: var(--font-color);
    text-decoration: none;
  }

  & > a:hover {
    color: var(--accent-font-color);
    transition: color ease-in-out 0.2s;
  }
`;

export { Nav, NavOpen, NavMenu, NavMenuContainer, NavMenuItem };
