import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 34%;

  @media screen and (max-width: 1580px) {
    width: 34%;
  }
`;

export const List = styled.ul`
  margin: 0 2px;
  background-color: var(--secondary-alt);
  max-height: 90%;
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 30px;
  width: 100%;

  @media screen and (max-width: 1580px) {
    margin-left: 3px;
    padding-left: 0;
  }

  @media screen and (max-width: 957px) {
    width: 100%;
    padding-left: 0;
  }
`;
