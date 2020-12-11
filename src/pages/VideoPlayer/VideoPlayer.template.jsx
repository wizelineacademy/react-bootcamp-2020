import styled, { keyframes } from 'styled-components'

const PlayerPage = styled.div`
  width: 100vw;
  background: var(--body-background);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  justify-items: stretch;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const PlayerContainer = styled.section`
  grid-column: 1 / 3;

  @media (max-width: 1200px) {
    grid-column: 1 / 2;
  }
`

const PlayerFrame = styled.iframe`
  width: 100%;
  height: 650px;
`

const PlayerTextContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: auto auto 20px;
`

const VideoTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const VideoDescription = styled.p`
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`

const VideoDate = styled.p`
  font-size: calc(var(--font-size) * 0.8);
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  &::before {
    content: 'Uploaded: ';
  }
`

const beat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(0.8); }
  75% { transform: scale(1.2); }
  100% { transform: scale(1); }
`

const VideoFavoriteIcon = styled.div`
  position: relative;
  font-size: 2.5rem;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1/2;
  justify-self: center;

  & > svg {
    fill: var(--accent-font-color);
    transform: scale(1);
    transition: transform ease-in-out 0.2s;
  }

  &:hover > svg {
    animation: ${beat} 1.5s infinite;
  }
`

const RelatedVideos = styled.div`
  grid-column: 3 / 4;

  & > ul {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 1200px) {
    grid-column: 1 / 2;
  }
`

export {
  PlayerPage,
  PlayerContainer,
  PlayerFrame,
  PlayerTextContainer,
  VideoTitle,
  VideoDescription,
  VideoDate,
  VideoFavoriteIcon,
  RelatedVideos
}