import styled from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
  padding: 20px 15px;
  margin: auto;
  display: flex;
  @media (min-width: 768px) {
    width: 97%;
    padding-left: 0;
    padding-right: 0;
  }
  .ml-auto {
    margin-left: auto;
  }
`;

export default Navigation;
