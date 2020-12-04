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

const PrimaryButton = styled.button`
  background: #2a9d8f;
  border: 1px solid #2a9d8f;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
  &:hover {
    background: #368f84;
  }
`;

export { NavbarWrapper, PrimaryButton };
