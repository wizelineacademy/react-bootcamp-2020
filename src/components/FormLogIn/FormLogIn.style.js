import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

export const BotonLogIn = styled.button`
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

export const Input = styled.input`
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
