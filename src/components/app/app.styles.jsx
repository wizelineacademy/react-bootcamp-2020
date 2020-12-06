import styled from 'styled-components';

export const AppContainer = styled.div`
  display: block;
  min-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.base_background_color};
`;

export const AppMainContainer = styled.div`
  display: flex;
`;
