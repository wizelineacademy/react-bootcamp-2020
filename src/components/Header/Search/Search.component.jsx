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
import { storage } from '../../../utils/storage';

const Search = () => {
  const { state, setState } = useAuth();
  const localVideoStoraged = storage.get('localVideoStoraged');
  const handleSearchBarState = () =>
    setState({
      ...state,
      searchbar: (prevState) => !prevState,
    });

  const handleSearchString = (event) => {
    const { value } = event.target;
    setState({
      ...state,
      searchString: value,
    });
  };

  const handleSearch = () => {
    if (localVideoStoraged.searchString !== state.searchString) {
      setState({
        ...state,
        isLoading: true,
      });
    }
  };

  return (
    <>
      <Container searchbar={state.searchbar}>
        <IconContainer onClick={handleSearchBarState}>
          <BackIcon />
        </IconContainer>
        <SearchBarContainer>
          <input
            placeholder="Search"
            onChange={handleSearchString}
            defaultValue={state.searchString}
          />
          <SearchIconContainer onClick={handleSearch}>
            <SearchIcon />
          </SearchIconContainer>
        </SearchBarContainer>
      </Container>
    </>
  );
};

export default Search;
