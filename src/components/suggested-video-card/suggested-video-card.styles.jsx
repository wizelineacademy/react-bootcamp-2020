import styled from 'styled-components';

export const SuggestedVideoCardContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Thumbnail = styled.img`
  width: 170px;
  height: 95px;
  margin-right: 5px;
`;

export const CardInformation = styled.div`
  h4 {
    font-size: ${(props) => props.theme.primary_text_size};
    margin-bottom: 5px;
    color: ${(props) => props.theme.primary_text_color};
    font-weight: ${(props) => props.theme.primary_title_weight};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    color: ${(props) => props.theme.primary_text_color};
    font-size: ${(props) => props.theme.secondary_text_size};
    font-weight: ${(props) => props.theme.secondary_title_weight};
  }
`;
