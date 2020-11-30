import styled from 'styled-components';

const ProfileCard = styled('div')`
  height: 8vh;
  display: flex;
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const ImageContainer = styled('div')`
  display: flex;
  padding: 0.3rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProfileImage = styled('img')`
  align-self: center;
  height: 80%;
`;
export { ProfileCard, ProfileImage, ImageContainer };
