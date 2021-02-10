import styled from 'styled-components';

const HeartButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.green};
  &:focus,
  &:active {
    outline: none;
  }
`;
export default HeartButton;
