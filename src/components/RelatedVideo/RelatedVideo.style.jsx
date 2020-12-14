import styled from 'styled-components';

const RelatedVideoWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 5rem;
  height: 10rem;
  margin-top: 2rem;
  transition: transform 250ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  width: 80rem;
`;

const ImageThumbnail = styled.img`
  width: fit-content;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: fit-content;
`;

const VideoInformation = styled.div`
  width: 38%;
  text-align: left;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export { RelatedVideoWrapper, ImageThumbnail, VideoInformation };
