import React from 'react';
import { CatCard } from '../cat-card/cat-card';
import { CatCardsContainer } from './cats-content.styles';

type CatsContentProps = {
  catFacts: Array<any>
}

export const CatsContent = ({ catFacts }: CatsContentProps) => {
  return (
    <CatCardsContainer>
      {catFacts.map(({ text }) => (
        <CatCard description={text} />
      ))}
    </CatCardsContainer>
  );
};