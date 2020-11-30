import styled from 'styled-components';

const Card = styled('li')`
  border-radius: 1%;
  display: flex;
  width: 300px;
  height: 350px;
  background-color: ${({ theme }) => theme.videoCardBg};
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.shadows};
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 700px) {
    width: 250px;
  }
`;
const CardContainer = styled('article')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const CardImage = styled('img')`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled('div')`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;
const Title = styled('h4')`
  font-size: large;
  margin: 0;
  padding: 0.5rem;
`;
const Description = styled('p')`
display:flex;
  font-size: small;
  padding: 0.5rem;
  overflow: hidden;
  text-overflow:ellipsis;
  height: 100px;
  width: 100%;
  
`;

export { Card, CardContainer, CardContent, CardImage, Description, Title };
