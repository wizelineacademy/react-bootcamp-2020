import React from 'react';
import { CardVideo, Description, Img, InfoContainer, Title } from './VideoItem.styled';

const VideoItem = ({ videoInfo: { title, description }, videoID: { videoId }, viewVideo }) => {

    return (
        <CardVideo 
            onClick={() => viewVideo(videoId)}
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