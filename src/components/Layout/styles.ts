import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;

export const WrapperMiddle = styled.div`
  height: 100%;
  width: min(601px, 100%);
`;
