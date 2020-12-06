import styled from "@emotion/styled";

export const Container = styled.div`
  position: static;
  width: 100%;
  height: 420px;

  @media (max-width: 320px) {
    height: 200px;
  }
`;

export const Info = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 25%;
  margin-top: -40px;
  margin-bottom: 40px;
  border-radius: 0px 0px 12px 12px;
  -moz-box-shadow: 4px 4px 14px #000;
  -webkit-box-shadow: 1px 1px 14px #000;
  @media (max-width: 320px) {
    height: 200px;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-top: 5px;
  margin-bottom: 40px;
  border-radius: 12px 12px 0px 0px;
`;
