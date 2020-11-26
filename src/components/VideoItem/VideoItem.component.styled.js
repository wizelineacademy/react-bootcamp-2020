import styled from 'styled-components';

export const Video = styled.div`
  padding: 10px;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px 10px;
  width: 300px;
  flex-basis: calc(33% - 20px);
  & img {
    margin-bottom: 10px;
    width: 200px;
    height: 250px;
  }
  & a {
    color: black;
    text-decoration: none;
  }
`;
