import styled from 'styled-components';

const PageContent = styled('section')`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 2fr 1fr;
`;

const VideoContent = styled('div')`
  display: grid;
  width: 100%;
  grid-template-rows: 50% 4vh 4vh auto;
  height: 100%;

  .fav-bar {
    display: flex;
    padding: 0.2rem;

    background-color: ${({ theme }) => theme.secondaryColor};
  }
  .fav-button-container {
    display: flex;
    align-content: flex-end;
    flex-direction: row-reverse;
    padding: 0.2rem;
  }

  button {
    cursor: pointer;
    font-size: medium;
    outline: none;
    border-radius: 1rem;
    margin: 0;
    padding: 0;
    width: 30%;
    transition: 0.3s;
  }

  button.fav {
    color: ${({ theme }) => theme.header};
    border: 3px solid ${({ theme }) => theme.header};
    background-color: transparent;
  }
  button.no-fav {
    color: white;
    border: 3px solid ${({ theme }) => theme.header};
    background-color: ${({ theme }) => theme.header};
  }
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
