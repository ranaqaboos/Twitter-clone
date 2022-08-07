import React from 'react';

import Tweet from '../Tweet';
import TweetBox from '../TweetBox';
import { Container, Tab, Tweets, Header } from './styles';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const allUsers = useSelector((state: any) => state.users);
  const allTweets = useSelector((state: any) => state.tweets);
  const currentUser = useSelector((state: any) => state.currentUser);
  const [tweets, setTweets] = React.useState([]);

  // Get the tweet's user
  const getElementById = (id: string, arr: any) => {
    // find the user with the id
    return arr.find((el: any) => el.id === id);
  };

  // Check if this id is in the array
  const isInArray = (id: number, arr: any) => {
    return arr.some((el: any) => el === id);
  };

  return (
    <Container>
      <Header>
        <button>
          <h1>Home</h1>
        </button>
      </Header>
      <TweetBox />

      <Tweets>
        {allTweets.map((tweet: any) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              userId={tweet.userId}
              name={getElementById(tweet.userId, allUsers)?.name}
              userName={getElementById(tweet.userId, allUsers)?.user}
              date={tweet?.date}
              content={tweet?.content}
              comments={tweet?.comments}
              image={tweet?.image}
              retweets={tweet?.retweets}
              likes={tweet?.likes}
              likedStatusInit={isInArray(currentUser.id, tweet?.likes)}
              retweetStatusInit={isInArray(currentUser.id, tweet?.retweets)}
              retweeted={tweet?.retweeted}
              retweetedBy={tweet?.retweetedBy}
              retweeterId={tweet?.retweeterId}
            />
          );
        })}
      </Tweets>
    </Container>
  );
};

export default Home;
