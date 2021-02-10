import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedVideo = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: ${({ theme }) => `solid 2px ${theme.colors.darkgreen}`};
  text-decoration: none;
  &:not(:first-of-type) {
    margin-top: -2px;
  }
`;
export default RelatedVideo;
