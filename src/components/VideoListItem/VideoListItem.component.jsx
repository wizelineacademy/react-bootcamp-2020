import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemContainer = styled.div`
  padding: 0px 10px 10px 0px;
  width: 100%;
  height: 150px;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.divider};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.body};
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 1px;
`;

const VideoDetail = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
`;

const ItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 13px;
  color: ${(props) => props.theme.text};
`;
const ItemAuthor = styled.h2`
  font-size: 12px;
  font-weight: bold;
  line-height: 0px;
  color: #afafaf;
`;

function VideoListItem(props) {
  const { id, title, author, img, onClick } = props;
  const path = '/details/'.concat(id);

  return (
    <ItemContainer>
      <Link to={path} onClick={() => onClick(id)}>
        <Container>
          <ImagePreview img={img} />
          <VideoDetail>
            <ItemTitle>{title && title.slice(0, 45)}</ItemTitle>
            <ItemAuthor>by {author}</ItemAuthor>
          </VideoDetail>
        </Container>
      </Link>
    </ItemContainer>
  );
}

export default VideoListItem;
