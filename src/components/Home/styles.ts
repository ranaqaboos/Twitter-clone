import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 4px 0 4px 13px;

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;
  }
`;
