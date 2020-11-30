import styled from 'styled-components';

const HaderStyled = styled('header')`
  height: 8vh;
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: 100vw;
  box-shadow: 1px 1px 3px 4px ${({ theme }) => theme.shadows};
  background-color: ${({ theme }) => theme.header};
`;

const HeaderButton = styled('button')`
  width: 10%;
  height: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.header};
  border: 1px solid transparent;
  color: white;
  text-transform: capitalize;
  transition: all 0.2s;
  z-index: 100;

  &:focus {
    outline: none;
  }
`;

const AnimatedButton = styled(HeaderButton)`
  &:hover {
    transform: translateY(5%) rotateZ(1deg);
  }
`;

const ButtonText = styled('span')`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavButton = styled(HeaderButton)`
  .iconFa {
    transition: 0.5s;

    transform: rotateZ(${({ rotate }) => (rotate === 'true' ? '180deg' : '0deg')});
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export { HaderStyled, AnimatedButton, NavButton, ButtonText };
