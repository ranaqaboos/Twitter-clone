import styled, { css } from 'styled-components';

import { Chat, Rocketseat, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid var(--twitter);
  padding-right: 10px;
  & > form {
    display: flex;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  padding: 20px;
  display: flex;

  & > input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
  }
`;

export const ImgInputWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: var(--twitter);
  border: none;
  color: white;
  font-weight: 900;
  text-transform: inherit;
  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ImgInput = styled.input`
  border: none;
  margin-right: 10px;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const Avatar = styled.img`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  object-fit: cover;
`;
