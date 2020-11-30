import styled from 'styled-components';

const VideoGrid = styled('ul')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1em 0.5rem;
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
  padding: .5em;
  text-align: center;
  @media screen and (max-width: 1000px){
   font-size:24px;
}
`;

export { VideoGrid, WelcomeDisplay };
