import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Link)`
  background-color: #fff;
  border: ${({ theme }) => `1px solid ${theme.colors.darkgreen}`};
  height: 100%;
  display: block;
  text-decoration: none;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightgreen};
    bottom: -10px;
    right: -10px;
    z-index: -1;
  }
`;

export default CardWrapper;
