import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  position: center;
  grid-template-columns: repeat(${(props) => props.columnss}, 1fr);
  grid-gap: 5px;
  border: 2px solid;
  padding: 100px;
  background-color: #8cffa0;
`;

export const PlayerContainer = styled.div`
  text-align: center;
  border: black 2px solid;
  margin: auto;
  max-width: 100%;
  height: 300px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const ResponsiveIframe = styled.iframe`
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 495px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 14px #000;
`;

export const VideoPlayer = styled.div``;

export const Boton1 = styled.button`
  width: 130px;
  height: 60px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  margin: 5px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px 10px 10px 10px;
  :hover {
    width: 140px;
    height: 70px;
  }

  :hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :hover:active {
    color: #000;
  }

  :hover:active:after {
    background: transparent;
  }

  :hover:hover:before {
    opacity: 1;
  }

  :hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const Input1 = styled.input`
  border: none;
  border-bottom: 4px solid #8842d5;
  margin-top: 100px;
  :hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :hover:active {
    color: #000;
  }

  :hover:active:after {
    background: transparent;
  }

  :hover:hover:before {
    opacity: 1;
  }

  :hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
