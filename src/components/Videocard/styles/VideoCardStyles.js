import styled from "@emotion/styled";

export const Descriptions = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
`;

export const Card = styled.div`
  margin-top: 20px;
  padding: 9px;
  flex: 1;
  flex-basis: 320px;
  flex-grow: 0;
  height: 180px;
  width: 320px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: static;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }

  :hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transform: scale(0.97);
  }

  :hover div {
    left: 0px;
    transition: all 0.3s ease-in-out;
    clip-path: circle(75%);
  }

  :hover img {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: scale(1.6) rotate(20deg);
    filter: blur(3px);
  }

  h4 {
    color: black;
    letter-spacing: 1px;
    margin: 0px;
  }

  p {
    line-height: 24px;
    height: 70%;
  }
`;
