import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin: 2em 2px;
  background-color: #292929;
  max-height: 480px;
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 30px;

  @media screen and (max-width: 1580px) {
    width: 100%;
    margin-left: 3px;
    padding-left: 0;
    max-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    width: 100%;
    padding-left: 0;
  }
`;
