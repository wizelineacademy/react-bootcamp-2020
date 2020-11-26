import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const LoginForm = styled(Form)`
  width: 30%;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 10px;
  }
`;
