import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './Navigation.styled';
import Button from './Button.styled';
import { logout } from '../../redux/actions/auth';

class Header extends Component {
  render() {
    return (
      <Headroom style={{ background: '#fff' }}>
        <Navigation>
          <Link to="/" data-testid="homeButton">
            <Button type="button">Home</Button>
          </Link>
          {this.props.authenticated ? (
            <>
              <Link to="/favorites" className="ml-auto" data-testid="favoritesButton">
                <Button type="button" mr="14px" green>
                  Favorites
                </Button>
              </Link>
              <Button
                type="button"
                dark
                onClick={this.props.logout}
                data-testid="logoutButton"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login" className="ml-auto" data-testid="loginButton">
              <Button type="button" dark>
                Login
              </Button>
            </Link>
          )}
        </Navigation>
      </Headroom>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
