import styled from 'styled-components';

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.lightgreen};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
