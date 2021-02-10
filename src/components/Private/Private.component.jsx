import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Private extends Component {
  render() {
    const { authenticated, children, ...props } = this.props;
    return (
      <Route
        {...props}
        render={() =>
          authenticated ? children : <Redirect to="/" data-testid="redirect" />
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Private);
