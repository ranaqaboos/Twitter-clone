import React from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import Main from '../Main';

import { Container, Wrapper, WrapperMiddle } from './styles';
import { Outlet } from 'react-router-dom';
import Messages from '../Messages';
const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <WrapperMiddle>
          <Outlet />
        </WrapperMiddle>
        <SideBar />
        <Messages />
      </Wrapper>
    </Container>
  );
};

export default Layout;
