import styled from 'styled-components';

export const Pane = styled.div`
  height: 100%;
  width: 100%;
  & > div {
    min-height: calc(100vh - 56px);
    padding: 20px;
    width: 70%;
    margin: auto;
    background-color: white;
  }
`;
