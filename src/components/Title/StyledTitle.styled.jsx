import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.darkgreen};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export default StyledTitle;
