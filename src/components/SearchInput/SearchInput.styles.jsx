import styled from 'styled-components';

const SearchForm = styled('form')`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  justify-content: flex-start;
  button {
    background-color: transparent;
    border: none;
    height: 50%;
    color: white;
    cursor: pointer;
  }
  input {
    transition: 0.8s;

    box-sizing: border-box;
    transition: 0.4s;
    height: 50%;
    border: none;
    outline: none;
    border-bottom: 3px solid white;
    width: 25%;
    margin: 1%;
    background-color: transparent;
    text-align: center;
    color: transparent;
    &::placeholder {
      transition: all 0.4s;
      display: none;
      text-transform: capitalize;
      color: transparent;
      text-align: center;
    }
    &:focus {
      color: white;
      &::placeholder {
        color: white;
      }
      height: 50%;
      border: none;
      outline: none;
      border-bottom: 3px solid white;
      width: 90%;
      margin: 1%;
      background-color: transparent;
    }
  }
`;
export { SearchForm };
