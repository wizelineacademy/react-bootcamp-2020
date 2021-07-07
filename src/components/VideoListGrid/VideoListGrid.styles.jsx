import styled from 'styled-components';

const VideoGrid = styled('ul')`
  margin: 0 auto;
  display: grid;
  width: ${({ listSize }) => (listSize ? 'min-content' : 'auto')};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: ${({ listSize }) => (!listSize || listSize !== 1 ? ' 2em 2rem ' : 'none')};
  padding: 0;
  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const WelcomeDisplay = styled('h1')`
  font-size: 50px;
  padding: 0.5em;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;

const NotContentDisplay = styled('p')`
  font-size: 5vh;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;

export { VideoGrid, WelcomeDisplay, NotContentDisplay };
