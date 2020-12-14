import styled from 'styled-components';

const LargeCardGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SmallCardGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export { LargeCardGrid, SmallCardGrid };
