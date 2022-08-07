import React from 'react';

import Button from '../Button';
import {
  Container,
  Menu,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  User,
  Avatar,
  ProfileData,
  ExitIcon,
  HashIcon,
  ListIcon,
  MoreIcon,
  BookmarkIcon,
  QuillPenIcon,
  ExitIconSmall,
} from './styles';
import { Link } from 'react-router-dom';
import useCurrentPath from '../../hooks/useCurrentPath';

import { useAppDispatch } from '../../store/store';
import { logout } from '../../features/users';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.currentUser);

  // useCurrentPath
  const locationPathname = useCurrentPath();

  const isHome: boolean = locationPathname === '/';
  const isProfile: boolean = locationPathname.includes('/profile');
  // const isProfile: boolean = locationPathname === '/profile';

  return (
    <Container>
      <Menu>
        <Logo />

        <Link style={{ textDecoration: 'none' }} to="/">
          <MenuButton className={`${isHome && 'active'}`}>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>
        </Link>
      <Link style={{ textDecoration: 'none' }} to="/explore">
        <MenuButton>
          <HashIcon />
          <span>Explore</span>
        </MenuButton>
      </Link>
        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon/>
          <span>List</span>
        </MenuButton>
        <Link style={{ textDecoration: 'none' }} to="/profile">
          <MenuButton className={`${isProfile && 'active'}`}>
            <ProfileIcon />
            <span>Profile</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <MoreIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <QuillPenIcon />
          <span>Tweet</span>
        </Button>
        
      </Menu>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <ExitIconSmall
          onClick={() => {
            alert('logout');
            dispatch(logout());
            navigate('/login');
          }}
        />
        <User>
          <Avatar src={currentUser.avatar} />

          <ProfileData>
            <span className="user-name">{currentUser.name}</span>
            <span>@{currentUser.user}</span>
          </ProfileData>

          <ExitIcon
            onClick={() => {
              alert('logout');
              dispatch(logout());
              navigate('/login');
            }}
          />
        </User>
      </div>
    </Container>
  );
};

export default MenuBar;
