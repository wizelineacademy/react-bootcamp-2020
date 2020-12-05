import React, { useContext } from 'react';
import { CardVideo, Description, Img, InfoContainer, Title } from './VideoItem.styled';
import { StateContext } from '../../utils/State';

const VideoItem = ({ videoInfo: { title, description, publishTime, thumbnails: { medium: { url } } }, videoID: { videoId }, viewVideo }) => {

    const { setVideo } = useContext(StateContext);

    const onClickVideo = () => {
        viewVideo();
        setVideo({
            title,
            description,
            publishTime,
            image: url,
            videoId
        });
    }

    return (
        <CardVideo 
            onClick={onClickVideo}
        >
            <Img background={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} />
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </InfoContainer>
        </CardVideo>
    );
};

export default VideoItem;