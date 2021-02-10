import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
export default VideoWrapper;
