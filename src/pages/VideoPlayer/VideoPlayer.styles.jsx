import styled from 'styled-components';

const PageContent = styled('section')`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  
  @media screen and (max-width:700px){
    grid-template-rows: 70vh  auto;
    grid-template-columns: 1fr;
    height: 100%;

  }
`;

const VideoContent = styled('div')`
  display: grid;
  width: 100%;
  grid-template-rows: 50% 4vh 4vh auto;
  height: 100%;
  @media screen and (max-width:700px){
    grid-template-rows: 50% 2vh 6vh auto;

    }

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
    @media screen and (max-width:700px){
      width:100%;
      font-size:small;
    }
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
  
`

const VideoList = styled('aside')`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.videoCardBg};
  @media screen and (max-width:700px){
    min-height: auto;
    grid-template-columns: 1fr;
    max-width:100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bg};


  }
`
const VideoInformationContainer = styled('div')`
  padding: 1em;
  @media screen and (max-width:700px){
    max-width:100%;
    h2{
      font-size:medium;
    }
    p{
      font-size:small
    }
    
  }
  
`;

export { VideoList, PageContent, VideoContent, VideoInformationContainer };
