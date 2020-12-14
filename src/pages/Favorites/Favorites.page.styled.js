import styled from 'styled-components';

export const FavContainer = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }
  & img {
    align-self: center;
    border-radius: 20px;
  }
`;
