import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const VideoHomeCardContianer = styled.div`
  margin: 0px 8px;
  margin-bottom: 40px;
  width: 270px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
`;

export const CardInformation = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 0px 8px;

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
    font-size: ${(props) => props.theme.primary_text_size};
    color: ${(props) => props.theme.secondary_text_color};
  }
`;

export const Cardtext = styled.div`
  margin-left: 15px;
`;

export const CardAvatar = styled(Avatar)`
  height: 30px !important;
  width: 30px !important;
`;
