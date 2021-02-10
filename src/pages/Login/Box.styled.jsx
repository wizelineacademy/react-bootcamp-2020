import styled from 'styled-components';

const Box = styled.div`
  margin-bottom: 1.5rem;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

export default Box;
