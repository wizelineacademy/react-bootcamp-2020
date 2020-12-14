import styled from 'styled-components';

const VideoDetailStyled = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
  }

  button {
    width: 100%;
    padding: 10px 20px;
  }

  .loved {
    background-color: red;
  }

  .love {
    background-color: transparent;
  }
`;

export default VideoDetailStyled;
