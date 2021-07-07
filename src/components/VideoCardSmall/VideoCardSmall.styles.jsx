import styled from 'styled-components';

const CardSmall = styled('li')`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.videoCardBg};
  align-items: center;
  text-align: start;
  border-top: 1px solid ${({ theme }) => theme.shadows};
  overflow-wrap: break-word;
  @media screen and (max-width: 700px) {
    height: 200px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
    border-top: none;
  }
  &:hover {
    transform: translateY(-1%);
    background-color: ${({ theme }) => theme.shadows};
  }
`;
const CardContainerSmall = styled('article')`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.3rem;
  flex-direction: row;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const CardImageSmall = styled('div')`
  width: 30%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 60%;
    margin: 0 auto;
  }
`;

const CardContentSmall = styled('div')`
  width: 100%;
  height: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    text-align: center;
    padding: 0;
    font-size: smaller;
    height: 20%;
  }
`;
const TitleSmall = styled('h4')`
  font-size: large;
  margin: 0;
`;
export { CardContainerSmall, CardContentSmall, CardImageSmall, CardSmall, TitleSmall };
