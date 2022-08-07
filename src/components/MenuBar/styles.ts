import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  TwitterIcon,
  Bookmark,
  More,
  Hash,
  List,
  QuillPen,
} from '../../styles/Icons';

export const Container = styled.div`
  /* background-color: var(--r7); */
  display: none;
  align-items: center;
  justify-content: center;
  /* width: 250px; */
  margin-left: 10px;
  overflow: hidden;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 20px 10px;

    margin-left: 70px;
    max-height: 100vh;

    overflow-y: auto;
  }
`;

export const Menu = styled.div`
  /* background-color: var(--r8); */
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(TwitterIcon)`
  /* background-color: var(--r1); */
  min-width: 30px;
  min-height: 30px;
  margin-left: 8px;
  > path {
    fill: var(--twitter);
  }
  margin-bottom: 10px;
`;

export const MenuButton = styled.button`
  /* background-color: var(--r2); */
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 5px 8px;
  border-radius: 25px;
  outline: 0;
  cursor: pointer;
  overflow: hidden;

  & > span {
    color: var(--black);
    display: none;
  }

  & + button {
    margin-top: 2px;
  }
  & + button:last-child {
    margin-top: 20px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }
  &.active {
    span,
    svg {
      font-weight: bold;
      color: var(--black);
      fill: var(--black);
    }
  }
  &:hover {
    background: var(--twitter-dark-hover);
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: 400;
      font-size: 19px;
    }
  }
`;

const IconCSS = css`
  /* background-color: var(--r3); */
  color: #000;
  fill: var(--black);

  flex-shrink: 0;
  width: 30px;
  height: 30px;
`;

// Icons
export const HomeIcon = styled(Home)`
  ${IconCSS}
`;

export const HashIcon = styled(Hash)`
  ${IconCSS}
`;

export const ListIcon = styled(List)`
  ${IconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${IconCSS}
`;

export const EmailIcon = styled(Email)`
  ${IconCSS}
`;

export const BookmarkIcon = styled(Bookmark)`
  ${IconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${IconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${IconCSS}
`;

export const MoreIcon = styled(More)`
  ${IconCSS}
`;

export const QuillPenIcon = styled(QuillPen)`
  ${IconCSS}
  /* color: #fff; */
  fill: #fff;
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const User = styled.div`
  /* background-color: var(--r4); */

  display: flex;
  overflow: hidden;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 8px 8px;
  border-radius: 25px;
  outline: 0;

  margin-top: 15px;

  align-items: center;

  &:hover {
    background: var(--twitter-dark-hover);
    span,
    svg {
      color: var(--black);
      fill: var(--like);
    }
  }
`;

export const Avatar = styled.img`
  /* background-color: var(--r5); */

  width: 39px;
  height: 39px;

  margin-right: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);

  object-fit: cover;
`;

export const ProfileData = styled.div`
  /* background-color: var(--r6); */
  overflow: hidden;

  display: none;
  .user-name {
    font-weight: bold;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--black);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  > path {
    color: gray;
  }
  width: 40px;
  height: 40px;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 40px;
    height: 40px;

    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;

export const ExitIconSmall = styled(ExitToApp)`
  display: inline-block;
  width: 40px;
  height: 40px;

  /* margin-left: 30px; */
  cursor: pointer;
  overflow: hidden;

  &:hover {
    > path {
      color: var(--like);
    }
  }
  @media (min-width: 1280px) {
    display: none;
    > path {
      color: var(--like);
    }
    width: 40px;
    height: 40px;
  }
`;
