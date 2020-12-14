import styled from 'styled-components';

const NavbarWrapper = styled.div`
  background: #264653;
  color: white;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  left: 50%;
  position: sticky;
  transform: translate(-50%, 0);
`;

const Input = styled.input`
  height: 2.3rem;
  align-self: center;
  width: 23rem;
  border-radius: 5px;
`;

const TitleLabel = styled.div`
  position: sticky;
  left: 3vw;
  cursor: pointer;
  &:hover {
    color: #ffa62b;
  }
`;

const NavbarButtons = styled.div`
  align-self: center;
  position: absolute;
  right: 3vw;
`;

export { NavbarWrapper, SearchBarWrapper, Input, TitleLabel, NavbarButtons };
