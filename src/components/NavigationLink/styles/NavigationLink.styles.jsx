import styled from 'styled-components';

const NavListItem = styled('li')`
  cursor: pointer;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  @media screen and (max-width: 1000px) {
    padding: 0.2;
    justify-content: center;
  }

  &:hover {
    transition: 0.5s;
    background-color: #121212;
  }

  div {
    color: ${({ theme }) => theme.secondaryColor};

    font-size: larger;
  }
`;
const NavIconContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const NavLinkContainer = styled('div')`
  display: flex;
  text-overflow: ellipsis;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export { NavIconContainer, NavListItem, NavLinkContainer };
