import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

export const MainMenuIcon = styled(MenuIcon)`
  color: ${(props) => props.theme.primary_text_color};
`;

export const Bottom = styled.div`
  width: 250px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
`;

export const MainMenuList = styled.div`
  width: 250px !important;
`;
