import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  padding: 1em 1.6em;
  border: 0.1em solid ${(props) => props.theme.text};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.22em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.bg};
    background-color: ${(props) => props.theme.text};
  }
`;
