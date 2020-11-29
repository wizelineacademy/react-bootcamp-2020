import styled from "styled-components";

const CardSmall = styled("li")`
display: flex;
width: 100%;
height:120px;
background-color: ${({ theme }) => theme.videoCardBg};
align-items: center;
text-align:center;
box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.shadows};
overflow-wrap:break-word;
&:hover{
   transform: translateY(-1%);
}

`
const CardContainerSmall = styled("article")`
width: 100%;
height:100%;
display:flex;
flex-direction:row;
cursor: pointer;

`
const CardImageSmall = styled("img")`
width: auto;
height:100%;


`

const CardContentSmall = styled("div")`
width: 100%;
height:90%;
display:flex;
flex-direction:column;

`
const TitleSmall = styled("h4")`
font-size:large;
margin:0;

`
export {CardContainerSmall,CardContentSmall,CardImageSmall,CardSmall,TitleSmall}