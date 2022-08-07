import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--black);
  }

  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input{
    border: 0;
    background: none;
    color: var(--black);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html{
    background: var(--primary);
  }

  :root{
    --primary: #fff;
    --secondary: #15181C;
    --search: #202327;
    --white: #fff;
    --black: #000;
    --gray: #657786;
    --light-gray: #eff3f4;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #cdd0d1;
    --twitter-light-hover: #011017;
    --r1: #f5f5f5;
    --r2: #f4cccc;
    --r3: #ffd966;
    --r4: #6aa84f;
    --r5: #45818e;
    --r6: #0b5394;
    --r7: #674ea7;
    --r8: #c27ba0;
    --r9: #2986cc;
    --r10: #c90076;
    }
`;
