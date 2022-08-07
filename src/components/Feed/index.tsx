import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, TabContainer, Tweets } from './styles';
import { useSelector } from 'react-redux';

const Feed: React.FC = () => {
  const allUsers = useSelector((state: any) => state.users);
  const currentUser = useSelector((state: any) => state.currentUser);
  const allTweets = useSelector((state: any) => state.tweets);
  console.log('🚀 ~ id', currentUser.id);
  console.log('🚀 ~ state', allTweets);

  // Get the user's tweets
  const getElementById = (id: string, arr: any) => {
    return arr.find((el: any) => el.id === id);
  };

  const isInArray = (id: number, arr: any) => {
    return arr.some((el: any) => el === id);
  };

  return (
    <Container>
      <TabContainer>
        <Tab className="selected">Tweets</Tab>
        <Tab>Tweets & replies</Tab>

        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabContainer>

      <Tweets>
        {allTweets.map((tweet: any) => {
          console.log('🚀 ~ tweet', tweet);

          return (
            //only user id = currentUser.id
            // or  retweeterId = currentUser.id

            <>
              {tweet.userId === currentUser.id ? (
                <Tweet
                  key={tweet?.id}
                  id={tweet?.id}
                  userId={tweet.userId}
                  name={getElementById(tweet?.userId, allUsers)?.name}
                  userName={getElementById(tweet?.userId, allUsers)?.user}
                  date={tweet?.date}
                  content={tweet?.content}
                  comments={tweet?.comments}
                  image={tweet?.image}
                  retweets={tweet?.retweets}
                  likes={tweet?.likes}
                  likedStatusInit={isInArray(currentUser.id, tweet?.likes)}
                  retweetStatusInit={isInArray(currentUser.id, tweet?.retweets)}
                  retweeted={tweet?.retweet}
                  retweetedBy={tweet?.retweetedBy}
                  retweeterId={tweet?.retweeterId}
                />
              ) : tweet.retweeterId === currentUser.id ? (
                <>
                  <Tweet
                    key={tweet.id}
                    id={tweet.id}
                    userId={tweet.userId}
                    name={getElementById(tweet.userId, allUsers)?.name}
                    userName={getElementById(tweet.userId, allUsers)?.user}
                    date={tweet.date}
                    content={tweet.content}
                    comments={tweet.comments}
                    image={tweet.image}
                    retweets={tweet.retweets}
                    likes={tweet.likes}
                    likedStatusInit={isInArray(currentUser.id, tweet.likes)}
                    retweetStatusInit={isInArray(
                      currentUser.id,
                      tweet.retweets
                    )}
                    retweeted={tweet.retweeted}
                    retweetedBy={'You'}
                    retweeterId={tweet.retweeterId}
                  />
                </>
              ) : null}
            </>
          );
        })}
      </Tweets>
    </Container>
  );
};

export default Feed;
