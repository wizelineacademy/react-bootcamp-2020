import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const WatchVideoContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 24px;
  padding-bottom: 24px;
`;

export const PrincipalContianer = styled.div`
  flex: 0.7;
  padding: 0px 24px;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 450px;
`;

export const VideoInformation = styled.div`
  padding: 20px 0 8px 0;
  border-bottom: ${(props) => props.theme.primary_border_color};

  h3 {
    color: ${(props) => props.theme.primary_text_color};
    font-weight: ${(props) => props.theme.primary_title_weight};
  }

  p {
    color: ${(props) => props.theme.secondary_text_color};
    font-size: ${(props) => props.theme.secondary_text_size};
    font-weight: ${(props) => props.theme.secondary_title_weight};
    padding: 5px 0px;
  }
`;

export const PrimaryVideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FavoritesAction = styled.div`
  color: ${(props) => props.theme.primary_action_icon_color};
`;

export const FavoritesActionIconContainer = styled.div`
  padding: 0px 5px;
`;

export const ChannelInformation = styled.div`
  border-bottom: ${(props) => props.theme.primary_border_color};
`;

export const ChannelHeader = styled.div`
  display: flex;
  padding-top: 16px;
  margin-bottom: 12px;
`;

export const ChannelAvatar = styled(Avatar)`
  height: 48px !important;
  width: 48px !important;
  margin-right: 16px !important;
`;

export const ChannelHeaderInformation = styled.div`
  h4 {
    font-size: ${(props) => props.theme.primary_text_size};
    color: ${(props) => props.theme.primary_text_color};
    font-weight: ${(props) => props.theme.primary_title_weight};
  }
  p {
    color: ${(props) => props.theme.secondary_text_color};
    font-size: ${(props) => props.theme.secondary_text_size};
    font-weight: ${(props) => props.theme.secondary_title_weight};
  }
`;

export const ChannelDescription = styled.div`
  margin-left: 64px;
  max-width: 615px;
  padding-bottom: 16px;

  p {
    color: ${(props) => props.theme.primary_text_color};
    font-size: ${(props) => props.theme.secondary_text_size};
    font-weight: ${(props) => props.theme.secondary_title_weight};
  }
`;

export const SecondaryContainer = styled.div`
  flex: 0.3;
  padding-right: 5px;
`;
