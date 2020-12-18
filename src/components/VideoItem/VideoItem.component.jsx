import React, { useContext } from 'react';
import { CardVideo, Description, Img, InfoContainer, Title } from './VideoItem.styled';
import { ConfigContext } from '../../utils/ConfigState';
import { VideoContext } from '../../utils/VideoState';

const VideoItem = ({ videoInfo: { title, description, publishTime, thumbnails: { medium: { url } } }, videoID: { videoId }, viewVideo }) => {

    const { state: { Theme: { PrimaryColor }, DarkMode } } = useContext(ConfigContext);
    const { dispatchV } = useContext(VideoContext);

    const onClickVideo = () => {
        viewVideo(videoId);
        dispatchV({
            type: "SET_CURRENT_VIDEO",
            payload: {
                title,
                description,
                publishTime,
                image: url,
                videoId
            }
        });
    };

    return (
        <CardVideo
            data-testid="CardVideo"
            onClick={onClickVideo}
        >
            <Img data-testid="Img" background={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} />
            <InfoContainer
                data-testid="InfoCont"
                color={PrimaryColor}
            >
                <Title
                    data-testid="Title"
                    color={DarkMode ? "white" : "black"}
                >
                    {title}
                </Title>
                <Description data-testid="Description">
                    {description}
                </Description>
            </InfoContainer>
        </CardVideo>
    );
};

export default VideoItem;