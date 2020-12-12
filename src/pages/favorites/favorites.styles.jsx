import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  flex: 1;
  margin-top: 24px;
  padding: 0px 5px;
`;

export const PageTitle = styled.h2`
  font-size: ${(props) => props.theme.primary_text_size};
  color: ${(props) => props.theme.primary_text_color};
  font-weight: ${(props) => props.theme.primary_title_weight};
  margin: 0px 8px;
  margin-bottom: 10px;
`;
