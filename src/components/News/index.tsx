import React from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  description: string;
}

const News: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <strong>{title}</strong>
      <span>{description}</span>
    </Container>
  );
};

export default News;
