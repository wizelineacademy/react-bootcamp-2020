import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import VideoItem from '../../components/VideoItem';
import { useVideoContext } from '../../VideoState/Provider';

import './Details.styles.css';

const ItemContainer = styled.div`
  width: 100%;
  border: 0px;
  margin-top: 20px;
  display: flex;
`;

const VideoContainer = styled.div`
  width: 70%;
  background-color: red;
`;

const ListContainer = styled.div`
  width: 30%;
  background-color: blue;
  padding: 0px 16px 0px 16px;
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
  line-height: 10px;
`;

function DetailsPage() {
  const [current, setCurrent] = useState({});
  const [list, setList] = useState([]);

  const { videos, currentVideo, setCurrentVideo } = useVideoContext();
  const { id } = useParams();

  const sectionRef = useRef(null);

  useEffect(() => {
    setCurrentVideo(id, videos);
  }, [videos]);

  useEffect(() => {
    if (currentVideo) {
      setCurrent(currentVideo[0]);
      const currentId = current && current.id;
      const filterVideo = videos.filter((item) => item.id !== currentId);
      setList(filterVideo);
    }
  }, [currentVideo, current]);

  return (
    <section className="details-page" ref={sectionRef}>
      <ItemContainer>
        <VideoContainer>
          {current && (
            <>
              <ReactPlayer url={current.url} width="100%" />
              <ItemTitle> {current.title} </ItemTitle>
              <ItemAuthor> By {current.author} </ItemAuthor>
              <ItemDescription> {current.description} </ItemDescription>
            </>
          )}
        </VideoContainer>
        <ListContainer>
          {list
            .map((item) => (
              <VideoItem
                key={item.id}
                title={item.title}
                img={item.img}
                author={item.author}
                description={item.description || 'No description.'}
                id={item.id}
              />
            ))}
        </ListContainer>
      </ItemContainer>
    </section>
  );
}

export default DetailsPage;
