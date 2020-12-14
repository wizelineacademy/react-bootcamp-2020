import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  & img {
    width: 640px;
    align-self: center;
    border-radius: 20px;
  }
`;
