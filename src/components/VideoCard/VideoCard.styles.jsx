import styled, { keyframes } from 'styled-components';

const cardAnimation = keyframes`
0%{
  transform: rotate(1deg)
}25%{
  transform: rotate(0deg)

}50%{
  transform: rotate(-1deg)

}75%{
  transform: rotate(0deg)
}100%{
  transform: rotate(1deg)

}
`;
const Card = styled('li')`
  border-radius: 2%;
  display: flex;
  width: 300px;
  height: 350px;
  background-color: ${({ theme }) => theme.videoCardBg};
  box-shadow: 1px 5px 14px ${({ theme }) => theme.shadows};
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 700px) {
    width: 250px;
  }

  &:hover {
    animation: ${cardAnimation} 0.2s;
  }
`;
const CardContainer = styled('article')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const CardImage = styled('div')`
  border-radius: 2.5% 2.5% 0 0;
  width: auto;
  height: 45%;
  display: flex;
  background-image: url(${({src})=>src});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:0%;

  flex-direction: column;
`;

const CardContent = styled('div')`
  width: auto;
  height: 60%;
  display: flex;
  flex-direction: column;
`;
const Title = styled('h4')`
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: large;
  width: 100%;
  color: white;
  height: 5vh;
  margin: 0;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.header};
`;
const Description = styled('p')`
  font-weight: bold;
  font-size: small;
  padding: 0.5rem;
  height: 100px;
  width: auto;
  overflow: hidden;
`;

export { Card, CardContainer, CardContent, CardImage, Description, Title };
