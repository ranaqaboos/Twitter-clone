import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  color: var(--gray);
  font-weight: 500;
  width: 100%;
  border-bottom: 1px solid var(--light-gray);
  &:hover {
    background: var(--twitter-dark-hover);
  }
  &.selected {
    color: var(--black);
    font-weight: bold;
    border-bottom: 5px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
