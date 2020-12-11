import styled from 'styled-components'

const LoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--body-background);
`

const LoginContainer = styled.div`
  width: 400px;
  text-align: center;
  transform: translate(0, -30%);
`

const LoginTitle = styled.h2`
  font-size: 1.4rem;
`

const LoginForm = styled.form`
  width: 100%;
`

const FormRow = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormLabel = styled.label`
  padding: 0.3rem 0;
  font-size: 1.2rem;
  align-self: flex-start;
`

const FormInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 0.4rem 0.6rem;
  font-family: inherit;
  font-size: 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--background);
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`

const FormButton = styled.button`
  width: 6rem;
  height: 40px;
  color: white;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: var(--border-radius);
  background: var(--accent-font-color);
`

export  { 
  LoginPage,
  LoginContainer, 
  LoginTitle, 
  LoginForm, 
  FormRow,
  FormLabel,
  FormInput,
  FormButton
}