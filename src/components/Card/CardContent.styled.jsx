import styled from 'styled-components';

const CardContent = styled.div`
  padding: 15px 30px;
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export default CardContent;
