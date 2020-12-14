import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  NavbarWrapper,
  SearchBarWrapper,
  Input,
  TitleLabel,
  NavbarButtons,
} from './Navbar.styles';
import { PrimaryButton } from '../../styledComponents';
import { useAuth } from '../../providers/Auth';
import VideoSearchContext from '../../state/VideoSearchContext';

function Navbar() {
  const [query, setQuery] = React.useState('');
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const { queryFn } = React.useContext(VideoSearchContext);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const onInputChange = (event) => {
    const input = event.target.value;
    setQuery(input);
  };

  const onSearchButtonClicked = (event) => {
    if (event.key === 'Enter' && query !== '') {
      queryFn(query);
      history.push(`/?search=${query}`);
    }
  };

  const onHomeClick = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <NavbarWrapper>
      <TitleLabel className="title-wrapper" onClick={onHomeClick}>
        <h3>{authenticated ? 'Human, Search!' : 'Search!'}</h3>
      </TitleLabel>
      <SearchBarWrapper className="searchbar-wrapper">
        <Input
          value={query}
          onChange={onInputChange}
          onKeyDown={onSearchButtonClicked}
          placeholder="Search some cool videos"
        />
      </SearchBarWrapper>
      <NavbarButtons className="navbarButtons-wrapper">
        {authenticated ? (
          <>
            <PrimaryButton>
              <Link to="/favorites">Favorites</Link>
            </PrimaryButton>
            <PrimaryButton>
              <Link to="/" onClick={deAuthenticate}>
                Log out
              </Link>
            </PrimaryButton>
          </>
        ) : (
          <>
            <PrimaryButton>
              <Link to="/login">Sign in</Link>
            </PrimaryButton>
          </>
        )}
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
