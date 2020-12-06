import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import VideoListItem from '../../components/VideoListItem';
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
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.divider};
  height: 500px;
  border-radius: 5px;
`;

const ListContainer = styled.div`
  width: 30%;
  padding: 0px 16px 0px 16px;
`;

const DetailsContainer = styled.div`
  padding: 10px;
  line-height: 15px;
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

const Button = styled.button`
  background: ${(props) => props.theme.itemColor};
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.itemColor};
  font-family: Lato;
  color: white;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  float: right;
`;

function DetailsPage() {
  const {
    videos,
    currentVideo,
    setCurrentVideo,
    setFavorites,
    favorites,
    removeFavorites,
  } = useVideoContext();

  const [current, setCurrent] = useState({});

  const [list, setList] = useState([]);
  const { id } = useParams();
  const { authenticated } = useAuth();

  const sectionRef = useRef(null);

  useEffect(() => {
    setCurrentVideo(id);
  }, [videos]);

  useEffect(() => {
    if (currentVideo) {
      setCurrent(currentVideo[0]);
      const filterVideo = favorites
        .concat(videos)
        .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));
      setList(filterVideo);
    }
  }, [currentVideo, current]);

  const handleClick = (ids) => {
    setCurrentVideo(ids);
    window.scrollTo(0, 0);
  };

  const handleFavorites = () => {
    if (favorites && favorites.findIndex((item) => item.id === current.id) === -1) {
      setFavorites(current);
    } else {
      removeFavorites(current);
    }
  };

  return (
    <section className="details-page" ref={sectionRef}>
      <ItemContainer>
        <VideoContainer>
          {current && (
            <>
              <ReactPlayer url={current.url} width="100%" />
              <DetailsContainer>
                {authenticated && (
                  <Button onClick={() => handleFavorites()}>
                    <FontAwesomeIcon icon={faHeart} />
                    {favorites &&
                    favorites.findIndex((item) => item.id === current.id) >= 0
                      ? ' Remove '
                      : ' Add '}
                    to Favorites
                  </Button>
                )}
                <ItemTitle> {current.title} </ItemTitle>
                <ItemAuthor> By {current.author} </ItemAuthor>
                <ItemDescription> {current.description} </ItemDescription>
              </DetailsContainer>
            </>
          )}
        </VideoContainer>
        <ListContainer>
          {list.map((item) => (
            <VideoListItem
              key={item.id}
              title={item.title}
              img={item.img}
              author={item.author}
              description={item.description || 'No description.'}
              id={item.id}
              onClick={handleClick}
            />
          ))}
        </ListContainer>
      </ItemContainer>
    </section>
  );
}

export default DetailsPage;
