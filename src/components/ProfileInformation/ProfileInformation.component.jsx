import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ProfileCard, ProfileImage, ImageContainer } from './ProfileInformation.styles';
import {useAppDataContext} from "../../providers/AppData";

const ProfileInformation = () => {

  const {state}= useAppDataContext();
  const theme = useContext(ThemeContext);
  return (
    <ProfileCard theme={theme}>
      <ImageContainer>
        <ProfileImage
          alt="userImage"
          src={state.user?state.user.avatarUrl:"https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"}
        />
      </ImageContainer>
    </ProfileCard>
  );
};

export default ProfileInformation;
