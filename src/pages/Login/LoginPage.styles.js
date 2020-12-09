import styled from 'styled-components';

export const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textcolor};
  border: none;
  background-color: transparent;
`;

export const Input = styled.input`
  color: black;
  font-size: 1rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: ${(props) => props.theme.variant};
  &:focus {
    outline: none;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  letter-spacing: -1px;
  color: ${(props) => props.theme.textcolor};
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FieldLabel = styled.label`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
  color: ${(props) => props.theme.textcolor};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.highBackground};
  vertical-align: middle;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.26);
  border-radius: 18px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
`;

export const ErrorLabel = styled.h4`
  color: red;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 91vh;
  margin-top: 5px;
  padding-left: 3px;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
