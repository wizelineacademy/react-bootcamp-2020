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

function Navbar({ onQuery }) {
  const [query, setQuery] = React.useState('');
  const history = useHistory();
  const { authenticated, logout } = useAuth();

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
    if (event.key === 'Enter') {
      onQuery(query);
    }
  };

  return (
    <NavbarWrapper>
      <TitleLabel className="title-wrapper">
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
