import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useForm } from '../../utils/hooks';

import loginApi from '../../utils/login.api';

const LoginPage = () => {
  const { onChange, onSubmit, values } = useForm(loginApi, {
    username: '',
    password: '',
  });

  return (
    <Form onSubmit={onSubmit}>
      <h1>Login</h1>
      <Form.Input
        label="Username"
        placeholder="Username"
        type="text"
        name="username"
        value={values.username}
        onChange={onChange}
      />

      <Form.Input
        label="Password"
        placeholder="Password"
        name="password"
        type="text"
        value={values.password}
        onChange={onChange}
      />

      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginPage;
