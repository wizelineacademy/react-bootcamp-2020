import styled from 'styled-components';

export const Login = styled.section`
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    color: var(--text-secondary);
  }

  a {
    text-decoration: none;
    color: var(--text-tertiary);
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;

export const LoginWrapper = styled.div`
  width: auto;
  padding: 4%;
  background-color: var(--secondary-alt);
`;

export const H1 = styled.h1`
  text-align: center;
  color: var(--text-secondary);
  letter-spacing: -1px;
  margin-bottom: 5%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;

  button[type='submit'] {
    width: 5rem;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 3px;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  input {
    color: var(--text-primary);
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid var(--text-primary);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
