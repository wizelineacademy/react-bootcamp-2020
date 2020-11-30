import styled from 'styled-components';

const PageContent = styled('section')`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 2fr 1fr;
`;

const VideoContent = styled('div')`
  height: 50%;
`;

const VideoList = styled('aside')`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.videoCardBg};
  
`;
const VideoInformationContainer = styled('div')`
  padding: 1em;
`;

export { VideoList, PageContent, VideoContent, VideoInformationContainer };
