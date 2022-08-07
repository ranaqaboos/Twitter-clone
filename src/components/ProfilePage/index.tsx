import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC<{
  name: string;
  user: string;
  bio: string;
  id: string;
}> = ({ name, user, bio, id}) => {
  console.log('🚀 ~ bio', bio);

  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined> Edit Profile</EditButton>
        <h1>{name}</h1>
        <h2>@{user}</h2>

        <p>{bio}</p>

        <ul>
          <li>
            <LocationIcon />
           Riyadh, Saudi Arabia
          </li>
          <li>
            <CakeIcon />
            Born August 9, 1998
          </li>
        </ul>

        <Followage>
          <span>
            <strong>0 </strong>
            Following
          </span>
          <span>
            <strong>0 </strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
