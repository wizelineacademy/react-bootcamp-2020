import styled from 'styled-components';

const Header = styled.header`
  font-size: calc(var(--font-size) * 1.5);
  text-align: center;
  width: 100%;
  background-color: var(--body-background);
  padding: 15px;
`;

const FavoritesGrid = styled.div`
  background-color: var(--body-background);
  padding: 15px;
  padding-top: 45px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 25% 25% 25% 25%;

  @media (max-width: 1200px) {
    grid-template-columns: 50% 50%;
  }
`;

const EmptyFavorites = styled.div`
  width: 100%;
  height: 95vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(var(--font-size) * 1.5);
  background-color: var(--body-background);
`;

export { Header, FavoritesGrid, EmptyFavorites };
