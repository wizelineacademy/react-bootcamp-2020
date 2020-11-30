import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ProfileCard, ProfileImage, ImageContainer } from './ProfileInformation.styles';

const ProfileInformation = () => {
  const theme = useContext(ThemeContext);
  return (
    <ProfileCard theme={theme}>
      <ImageContainer>
        <ProfileImage
          alt="userImage"
          src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"
        />
      </ImageContainer>
    </ProfileCard>
  );
};

export default ProfileInformation;
