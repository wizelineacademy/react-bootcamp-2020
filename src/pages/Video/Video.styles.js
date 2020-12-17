import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--secondary);
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: auto;

  @media screen and (max-width: 957px) {
    flex-direction: column;
  }
`;
