import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Container from './Container.styled';
import FormWrapper from './FormWrapper.styled';
import Box from './Box.styled';
import { login } from '../../redux/actions/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((e) => console.log(e));
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Container>
        <FormWrapper>
          <h1>Sing In</h1>
          <form onSubmit={this.handleSubmit}>
            <Box>
              <TextInput
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                data-testid="username"
              />
            </Box>
            <Box>
              <TextInput
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                password
              />
            </Box>
            <Box align="center">
              <Button>Login</Button>
            </Box>
          </form>
        </FormWrapper>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));
