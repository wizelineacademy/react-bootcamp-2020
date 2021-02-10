import styled from 'styled-components';

const VideoInfo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: ${({ theme }) => theme.colors.darkgreen};
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  p {
    line-height: 1.5;
  }
`;

export default VideoInfo;
