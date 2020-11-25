import React, { useContext } from 'react';
import './Navbar.styles.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { VideoContext } from '../../providers/Video';

function NavBar() {
  const history = useHistory();
  const { searchTerm, setSearchTerm, fetchVideos } = useContext(VideoContext);

  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleChangeSearchInput = (value) => {
    setSearchTerm(value);
  };

  const handleClickSearch = () => {
    fetchVideos();
  };

  return (
    <header className="navbar">
      <div className="navbar_title navbar_item">Hotdog</div>
      <div className="navbar_searchbox">
        <div id="cover">
          <div className="tb">
            <div className="td">
              <input
                type="text"
                className="navbar_searchinput"
                placeholder="Search"
                required
                value={searchTerm}
                onChange={(event) => handleChangeSearchInput(event.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit" onClick={handleClickSearch}>
                <div id="s-circle" />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_item">About Us</div>
      <div className="navbar_item">Darkmode</div>
      {authenticated ? (
        <span>
          <Link to="/" onClick={deAuthenticate}>
            logout
          </Link>
        </span>
      ) : (
        <Link className="navbar_item" to="/login">
          Login
        </Link>
      )}
    </header>
  );
}

export default NavBar;
