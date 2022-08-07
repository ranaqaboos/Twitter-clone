import { useSelector } from 'react-redux';
import React from 'react';
import { textLimiter } from '../../utils/helperFunc';
import { useAppDispatch } from '../../store/store';
import { likeTweet, retweet } from '../../features/users';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

// props interface
interface TweetProps {
  userId?: number;
  userName?: string;
  name?: string;
  date?: string;
  content?: string;
  image?: string;
  comments?: { userId: number; name: string; image: string; content: string }[];
  retweets?: string[];
  likes?: string[];
  id: number;
  retweeted?: boolean;
  retweeterId?: number;
  retweetedBy?: string;
  likedStatusInit?: boolean;
  retweetStatusInit?: boolean;
}

const Tweet: React.FC<TweetProps> = ({
  id = 0,
  userId,
  name='' ,
  userName='' ,
  date = '25 Jul 2022',
  content = 'Description...',
  image = '',
  comments = [],
  retweets = [],
  likes = [],
  retweetStatusInit,
  likedStatusInit,
  retweeted,
  retweeterId,
  retweetedBy,
}: TweetProps) => {
  console.log('🚀 ~ userId', userId);
  const dispatch = useAppDispatch();
  const currentUser = useSelector((state: any) => state.currentUser);
  const allUsers = useSelector((state: any) => state.users);

  const [avatar, setAvatar] = React.useState('');
  const getUserById = (userId?: number) => {
    const user = allUsers.find((user: any) => user.id === userId);
    return user;
  };
  React.useEffect(() => {
    setAvatar(getUserById(userId)?.avatar);
  }, [userId]);

  // likesNumber state
  const [likesNumber, setLikesNumber] = React.useState(likes.length);
  // retweetsNumber state
  const [retweetsNumber, setRetweetsNumber] = React.useState(retweets.length);

  // commentsNumber state
  const [commentsNumber, setCommentsNumber] = React.useState(0);

  const [retweetedStatus, setRetweetedStatus] =
    React.useState(retweetStatusInit);
  const [likedStatus, setLikedStatus] = React.useState(likedStatusInit);

  const handleRetweet = () => {
    if (retweetedStatus) {
      dispatch(retweet({ tweetId: id }));

      setRetweetsNumber(retweetsNumber - 1);
      setRetweetedStatus(false);
    } else {
      dispatch(retweet({ tweetId: id }));

      setRetweetsNumber(retweetsNumber + 1);
      setRetweetedStatus(true);
    }
  };

  const handleLike = () => {
    if (likedStatus) {
      dispatch(likeTweet({ tweetId: id }));
      setLikesNumber(likesNumber - 1);
      setLikedStatus(false);
    } else {
      dispatch(likeTweet({ tweetId: id }));

      setLikesNumber(likesNumber + 1);
      setLikedStatus(true);
    }
  };

  return (
    <Container>
      {retweeted && (
        <Retweeted>
          <RocketseatIcon />
          {retweetedBy} Retweeted
        </Retweeted>
      )}
      <Body>
        {avatar ? <Avatar src={avatar} /> : <Avatar />}

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>@{userName}</span>
            <Dot />
            <time>{date}</time>
          </Header>

          <Description>{textLimiter(content, 200)}</Description>

          {image && <ImageContent src={image} />}

          <Icons>
            <Status>
              <CommentIcon />
              {commentsNumber}
            </Status>
            <Status onClick={handleRetweet}>
              <RetweetIcon color={retweetedStatus ? '#00acee' : '#222222'} />
              {retweetsNumber}
            </Status>
            <Status onClick={handleLike}>
              <LikeIcon color={likedStatus ? '#f24' : '#222222'} />
              {likesNumber}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
