import React from 'react';
import { ProfileCard, ProfileImage, ImageContainer } from './ProfileInformation.styles';
import { useAppDataContext } from '../../providers/AppData';
import { useAuth } from '../../providers/Auth';

const ProfileInformation = () => {
  const { state } = useAppDataContext();
  const { authenticated } = useAuth();
  return (
    <ProfileCard >
      <ImageContainer>
        <ProfileImage
          alt="userImage"
          src={
            state.user && authenticated
              ? state.user.avatarUrl
              : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg'
          }
        />
      </ImageContainer>
    </ProfileCard>
  );
};

export default ProfileInformation;
