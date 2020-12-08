import styled from 'styled-components';

const ReproducerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const Reproducer = styled.iframe`
  width: 60%;
  border-radius: 10px;
  height: 25rem;
`;

const VideoInformation = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 15px;
`;

export { ReproducerWrapper, Reproducer, VideoInformation };
