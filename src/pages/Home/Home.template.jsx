import styled from 'styled-components';

const HomeSearch = styled.div`
  background-color: var(--body-background);
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomeSearchInput = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  background: transparent;
  border: none;
  font-family: var(--font-family);
  font-size: calc(var(--font-size) * 1.2);
  border-bottom: 1px solid var(--background);
  transition: border ease-in-out 0.1s;
  position: absolute;

  &:focus {
    border-bottom: 3px solid var(--accent-font-color);
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-bottom: 3px solid var(--accent-font-color);
  }
`;

const HomeGrid = styled.div`
  background-color: var(--body-background);
  padding: 15px;
  padding-top: 45px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export { HomeSearch, HomeSearchInput, HomeGrid };
