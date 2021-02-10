import styled from 'styled-components';

const CardVideo = styled.div`
  width: 100%;
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CardVideo;
