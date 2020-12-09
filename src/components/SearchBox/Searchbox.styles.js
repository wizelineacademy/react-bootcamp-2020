import styled from 'styled-components';

export const NavBarSearchBox = styled.div`
  margin-right: auto;
`;

export const Cover = styled.div`
  top: 50%;
  left: 0;
  right: 0;
  width: 400px;
  padding: 7px;
  background-color: ${(props) => props.theme.variant};
  border-radius: 8px;
  box-shadow: 0 4px 22px ${(props) => props.theme.variant}, 0 0 0 10px #ffffffeb;
  transform: scale(0.6);
`;

export const TB = styled.div`
  display: table;
  width: 100%;
`;

export const TD = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const SearchInput = styled.input`
width: 100%;
height: 50px;
font-size: 30px;
line-height: 1;
border: none;
color: #fff;
font-family: Nunito;
padding: 0;
margin: 0;
border: 0;
background-color: transparent;
&:focus {
  outline: none;
}
&:placeholder {
  color: #1c5476;
`;

export const SearchButton = styled.button`
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  position: relative;
  display: block;
  width: 84px;
  height: 55px;
  cursor: pointer;
`;

export const SCircle = styled.div`
  position: relative;
  top: -9px;
  left: -18;
  width: 30px;
  height: 30px;
  border-width: 15px;
  border: 6px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
`;

export const ButtonSpan = styled.span`
  position: absolute;
  top: 24px;
  left: 19px;
  display: block;
  width: 10px;
  height: 8px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
  &:before,
  :after {
    content: '';
    position: absolute;
    bottom: -5;
    right: 11;
    width: 28px;
    height: 8px;
    background-color: #fff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }
`;

// export const styles = {
//   NavBarSearchBox: NavBarSearchBox,
//   Cover: Cover,
//   TB: TB,
//   TD: TD,
//   SearchInput: SearchInput,
//   SearchButton: SearchButton,
//   SCircle: SCircle,
//   ButtonSpan: ButtonSpan,
// };
