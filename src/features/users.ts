import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  users: Array<{
    id: number;
    name: string;
    user: string;
    email: string;
    password: string;
    tweetsCount: number;
    bio: string;
    avatar?: string;
  }>;

  currentUser: {
    id: number;
    name: string;
    user: string;
    tweetsCount: number;
    bio: string;
    avatar?: string;
  };

  isLoggedIn: boolean;

  tweets: Array<{
    id: number;
    userId: number;
    content: string;
    image?: string;
    date: string;
    likes: number[];
    retweets: number[];
    comments: number;
    retweeted: boolean;
    retweeterId?: number;
    retweetedBy?: string;
  }>;
}

const initialState: UserState = {
  isLoggedIn: false,
  users: [
    {
      id: 1,
      name: 'Noura',
      user: 'iNoura',
      email: 'Noura@gmail.com',
      password: 'Admin@@@123',
      tweetsCount: 0,
      bio: '',
      avatar:'https://pbs.twimg.com/media/FY_W0prXkAAFoSq?format=jpg&name=900x900',
    },
  ],
  currentUser: {
    id: 0,
    name: '',
    user: '',
    tweetsCount: 0,
    bio: '',
  },

  tweets: [
    {
      id: 1,
      userId: 1,
      content: 'Good Morning',
      date: '2020-01-01',
      likes: [],
      image: '',
      retweets: [],
      comments: 0,
      retweeted: false,
      retweeterId: undefined,
      retweetedBy: undefined,
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        name: string;
        user: string;
        email: string;
        password: string;
        bio: string;
      }>
    ) => {
      state.users.push({
        id: state.users.length + 1,
        name: action.payload.name,
        user: action.payload.user,
        email: action.payload.email,
        password: action.payload.password,
        tweetsCount: 0,
        bio: action.payload.bio,
      });
      state.currentUser = {
        id: state.users.length + 1,
        name: action.payload.name,
        user: action.payload.user,
        tweetsCount: 0,
        bio: action.payload.bio,
      };

      state.isLoggedIn = true;
    },

    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      // check if the user exists
      const user = state.users.find(
        (user) => user.email === action.payload.email
      );
      // if exists, check if the password is correct
      if (user && user.password === action.payload.password) {
        state.isLoggedIn = true;
        state.currentUser = {
          id: user.id,
          name: user.name,
          user: user.user,
          tweetsCount: user.tweetsCount,
          bio: user.bio,
          avatar: user.avatar,
        };
      }
    },

    addTweet: (
      state,
      action: PayloadAction<{
        content: string;
        image: string;
      }>
    ) => {
      state.tweets.unshift({
        id: state.tweets.length + 1,
        userId: state.currentUser.id,
        content: action.payload.content,
        image: action.payload.image,
        date: new Date().toLocaleDateString('en-US'),
        likes: [],
        retweets: [],
        comments: 0,
        retweeted: false,
      });
      state.currentUser.tweetsCount++;
      // find current user from users and increse tweetsCount
    },
    likeTweet: (state, action: PayloadAction<{ tweetId: number }>) => {
      const tweet = state.tweets.find(
        (twt) => twt.id === action.payload.tweetId
      );

      if (tweet) {
        // currenr user id found in the likes array
        const liked = tweet.likes.findIndex(
          (id) => id === state.currentUser.id
        );
        // if the user id is found in the likes array, remove it
        if (liked !== -1) {
          tweet.likes.splice(liked, 1);
        } else {
          // if the user id is not found in the likes array, add it
          tweet.likes.push(state.currentUser.id);
        }
      }
    },

    retweet: (state, action: PayloadAction<{ tweetId: number }>) => {
      const tweet = state.tweets.find(
        (twt) => twt.id === action.payload.tweetId
      );

      if (tweet) {
        // currenr user id found in the retweets array
        const retweeted = tweet.retweets.findIndex(
          (id) => id === state.currentUser.id
        );
        // if the user id is found in the retweets array, remove it
        if (retweeted !== -1) {
          tweet.retweets.splice(retweeted, 1);
          state.currentUser.tweetsCount--;
          // find current user from users and increse tweetsCount
        } else {
          // if the user id is not found in the retweets array, add it
          tweet.retweets.push(state.currentUser.id);
          state.currentUser.tweetsCount++;
          // find current user from users and increse tweetsCount

          // add the retweeted tweet to the tweets array
          state.tweets.unshift({
            id: state.tweets.length + 1,
            userId: tweet.userId,
            content: tweet.content,
            image: tweet.image,
            date: new Date().toLocaleDateString('en-US'),
            likes: tweet.likes,
            retweets: tweet.retweets,
            comments: tweet.comments,
            retweeted: true,
            retweeterId: state.currentUser.id,
            retweetedBy: state.currentUser.name,
          });
        }
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {
        id: 0,
        name: '',
        user: '',
        tweetsCount: 0,
        bio: '',
        avatar: '',
      };
    },
  },
});

export const { addUser, login, logout, addTweet, likeTweet, retweet } =
  userSlice.actions;

export default userSlice.reducer;
