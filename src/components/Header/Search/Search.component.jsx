import React from 'react';

import {
  Container,
  SearchIcon,
  BackIcon,
  IconContainer,
  SearchIconContainer,
  SearchBarContainer,
} from './Search.styles';
import { useAuth } from '../../../providers/Auth';

const Search = () => {
  const { state, setState } = useAuth();
  const handleSearchBarState = () => setState({ searchbar: (prevState) => !prevState });

  return (
    <>
      <Container searchbar={state.searchbar}>
        <IconContainer onClick={handleSearchBarState}>
          <BackIcon />
        </IconContainer>
        <SearchBarContainer>
          <input placeholder="Buscar" />
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </SearchBarContainer>
      </Container>
    </>
  );
};

export default Search;
