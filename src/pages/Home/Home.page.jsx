import React, { useRef } from 'react';
import styled from 'styled-components';
import VideoItem from '../../components/VideoItem';
import { useVideoContext } from '../../VideoState/Provider';

import './Home.styles.css';

const ItemContainer = styled.div`
  width: 100%;
  border: 0px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

function HomePage() {
  const { videos } = useVideoContext();

  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Wellcome to the challenge!</h1>
      <ItemContainer>
        {videos.map((item) => (
          <VideoItem
            key={item.id}
            title={item.title}
            img={item.img}
            author={item.author}
            description={item.description || 'No description.'}
            id={item.id}
          />
        ))}
      </ItemContainer>
    </section>
  );
}

export default HomePage;
