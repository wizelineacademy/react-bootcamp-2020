import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.header_contianer_height};
  padding: 0px 16px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.secondary_background_color};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 450px;
  border: 0.5px solid #e4e5e8;
  border-radius: 3px;
`;

export const IconButtonContainer = styled(IconButton)`
  padding: 0px !important;
`;

export const SearchButton = styled(SearchIcon)`
  background-color: ${(props) => props.theme.secondary_background_color};
  border-left: 0.5px solid #e4e5e8;
  color: gray;
  width: 40px !important;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.secondary_background_color};
  color: ${(props) => props.theme.primary_text_color};
  font-weight: ${(props) => props.theme.primary_title_weight};
`;

export const IconsContainer = styled.div`
  display: felx;
  align-items: center;
`;
