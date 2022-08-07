import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px);
  }
`;
export const SearchWrapper = styled.div`
  padding: 3px 44px 0px 24px;

  min-width: 332px;

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 52px;
`;
export const SearchInput = styled.input`
  height: 45px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  width: 350px;

  border-radius: 19.5px;
  background: var(--light-gray);
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;
export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;

  margin-top: 3px;

  position: sticky;
  top: 0;

  > div + div {
    margin-top: 15px;
  }
`;
