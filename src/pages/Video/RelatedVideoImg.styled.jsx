import styled from 'styled-components';

const RelatedVideoImg = styled.div`
  width: 30%;
  flex: 0 0 30%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export default RelatedVideoImg;
