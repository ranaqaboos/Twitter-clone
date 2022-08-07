import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main: React.FC = () => {
  const { name, user, tweetsCount, bio, id } = useSelector(
    (state: any) => state.currentUser
  );
  console.log('🚀 ~ currentUser', { name, user, tweetsCount });

  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <button title="back" onClick={() => navigate(-1)}>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{name}</strong>
          <span>{tweetsCount} Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage name={name} user={user} bio={bio} id={id} />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
