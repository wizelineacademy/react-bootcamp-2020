import styled from 'styled-components'

const VideoContainer = styled.div`
  border: 1px solid var(--background);
  margin: 5px;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 60px 100px;
  column-gap: 5px;
`

const VideoThumbnail = styled.img`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const VideoTitle = styled.p`
  margin-top: 0.2rem;
  grid-column: 3 / 5;
  grid-row: 1 / 2;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const VideoDate = styled.p`
  align-self: flex-start;
  padding: 0;
  grid-column: 3 / 5;
  grid-row: 2 / 3;
  font-size: calc(var(--font-size) * 0.8);

  &::before{
    content: 'Uploaded ';
  }
`

export { VideoContainer, VideoTitle, VideoThumbnail, VideoDate } 