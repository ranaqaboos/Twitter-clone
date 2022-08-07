import React, { useState } from 'react';
import {
  Container,
  InputWrapper,
  ImgInput,
  Button,
  Avatar,
  Input,
  ImgInputWrapper,
} from './styles';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/store';
import { addTweet } from '../../features/users';

const TweetBox: React.FC = () => {
  const dispatch = useAppDispatch();

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const currentUser = useSelector((state: any) => state.currentUser);

  const sendTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTweet({
        content: tweetMessage,
        image: tweetImage,
      })
    );

    setTweetMessage('');
    setTweetImage('');
  };

  const handleTweetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweetMessage(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweetImage(e.target.value);
  };

  const isTweetEmpty = tweetMessage.trim().length === 0;

  return (
    <Container>
      <form onSubmit={sendTweet}>
        <InputWrapper>
          <Avatar src={currentUser.avatar} />

          <Input
            onChange={handleTweetChange}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </InputWrapper>

        <ImgInputWrapper>
          <ImgInput
            onChange={handleImageChange}
            value={tweetImage}
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <Button disabled={isTweetEmpty} type="submit">
            Tweet
          </Button>
        </ImgInputWrapper>
      </form>
    </Container>
  );
};

export default TweetBox;
