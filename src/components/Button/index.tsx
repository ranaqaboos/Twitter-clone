import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};

  border: ${(props) =>
    props.outlined ? '1px solid var(--light-gray)' : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--white);
  }

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(-twitter-light-hover)'};
  }
`;
