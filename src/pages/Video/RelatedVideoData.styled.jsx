import styled from 'styled-components';

const RelatedVideoData = styled.div`
  width: 70%;
  flex: 0 0 70%;
  padding: 10px;
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.darkgreen};
    font-size: 1.2rem;
  }
`;

export default RelatedVideoData;
