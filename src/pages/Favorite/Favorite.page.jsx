import React, { useRef } from 'react';
import styled from 'styled-components';
import './Favorite.styles.css';

const ItemContainer = styled.div`
  width: 100%;
  border: 0px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

function FavoritePage() {
  const sectionRef = useRef(null);

  return (
    <section className="favorite" ref={sectionRef}>
      <h1>My favorites</h1>
      <ItemContainer>
        <div>hola</div>
      </ItemContainer>
    </section>
  );
}

export default FavoritePage;
