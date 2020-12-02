import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './VideoItem.styles.css';

const ItemContainer = styled.div`
  padding: 0px 10px 10px 0px;
  width: 33.333%;
  height: 300px;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const Container = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
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
  padding: 20px;
`;

const ItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 13px;
`;
const ItemAuthor = styled.h2`
  font-size: 12px;
  font-weight: bold;
  line-height: 10px;
  color: #afafaf;
`;

const ItemDescription = styled.span`
  font-size: 14px;
`;

const DescriptionContainer = styled.p`
  line-height: 10px;
`;
const ItemPlay = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  padding: 12px 12px 12px 18px;
  position: relative;
  top: 90%;
  float: right;
  margin-right: 10px;
  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    transform: translateY(-7px);
  }
`;

function VideoItem(props) {
  const { id, title, author, description, img } = props;
  const path = '/details/'.concat(id);
  return (
    <ItemContainer>
      <Container>
        <ImagePreview img={img}>
          <Link to={path}>
            <ItemPlay>
              <FontAwesomeIcon icon={faPlay} style={{ color: '#18A67B' }} />
            </ItemPlay>
          </Link>
        </ImagePreview>
        <VideoDetail>
          <ItemTitle>{title && title.slice(0, 45)}</ItemTitle>
          <ItemAuthor>by {author}</ItemAuthor>
          <DescriptionContainer>
            <ItemDescription>{description && description.slice(0, 200)}</ItemDescription>
          </DescriptionContainer>
        </VideoDetail>
      </Container>
    </ItemContainer>
  );
}

export default VideoItem;
