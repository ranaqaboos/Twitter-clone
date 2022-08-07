import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Badr" nickname="@badr" />,
              <FollowSuggestion name="Sarah" nickname="@i_sara" />,
              <FollowSuggestion name="Fahad" nickname="@i_fahad" />,
            ]}
          />
          <List
            title="What’s happening"
            elements={[
              <News
                title="Twitter launched new API"
                description="Twitter launched new API"
              />,
              <News
                title="Twitter launched new API"
                description="Twitter launched new API"
              />,
              <News
                title="Twitter launched new API"
                description="Twitter launched new API"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
