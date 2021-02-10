import styled from 'styled-components';

const StyledButton = styled.button`
  box-shadow: ${({ theme }) => `3px 3px 0 1px ${theme.colors.darkgreen}`};
  max-width: 180px;
  padding: 17.5px 20px;
  font-size: 13px;
  background-color: #fff;
  border: ${({ theme }) => `solid 1px ${theme.colors.darkgreen}`};
  color: ${({ theme }) => theme.colors.darkgreen};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  line-height: 13px;
  &:hover {
    box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.darkgreen}`};
  }
  &:focus {
    outline: none;
  }
`;

export default StyledButton;
