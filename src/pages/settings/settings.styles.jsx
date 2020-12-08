import styled from 'styled-components';

export const SettingsContainer = styled.div`
  display: flex;
  margin-top: 24px;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Main = styled.div`
  width: 70vh;
  min-width: 320px;
  margin: 0px auto;

  h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin: 0px 5px 10px 5px;
    color: ${(props) => props.theme.primary_text_color};
  }
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: ${(props) => props.theme.primary_border_color};
`;
export const Body = styled.div`
  margin: 30px 15px 0px 15px;
`;
export const SettingContainer = styled.div`
  display: flex;
  margin: 5px 0px;
  align-items: center;
  color: ${(props) => props.theme.primary_text_color};
`;
