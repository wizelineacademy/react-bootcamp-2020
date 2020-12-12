import styled, { keyframes } from "styled-components";

const CardWrapper = styled.div`
  border-radius: var(--border-radius);
  border: 1px solid var(--background);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  background-color: white;
`

const CardThumbnail = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  border-bottom: 1px solid var(--background);
`

const CardTextContainer = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 80px 60px 30px;
  column-gap: 5px;
  row-gap: 5px;
  padding: 15px;
`

const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
  align-self: flex-start;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1/2;
  justify-self: start;

  &:hover {
    cursor: pointer;
  }
`

const CardDescription = styled.p`
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  grid-column: 1 / 3;
  grid-row: 2/3;
  justify-self: stretch;
  text-align: justify;
`

const CardDate = styled.p`
  font-size: calc(var(--font-size) * 0.8);
  grid-column: 1 / 3;
  grid-row: 3/4;
  justify-self: start;

  &::before{
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

const CardFavoriteIcon = styled.div`
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

export { CardWrapper, CardThumbnail, CardTextContainer, CardTitle, CardDescription, CardDate, CardFavoriteIcon }