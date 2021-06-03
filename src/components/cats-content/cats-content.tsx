import React, { useEffect, useState } from 'react';
import { CatCard } from '../cat-card/cat-card';
import { 
  CatCardsContainer, 
  ShuffleButton, 
  CatsContentWrapper
} from './cats-content.styles';

export const CatsContent = () => {
  const [catFacts, setCatFacts] = useState([]);
  
  useEffect(() => {
    fetchCatsData()
  }, []);

  const fetchCatsData = () => {
    return fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
      .then(response => response.json())
      .then(responseCatFacts => setCatFacts(responseCatFacts))
  }

  return (
    <CatsContentWrapper>
      <CatCardsContainer>
        {catFacts.map(({ text }) => (
          <CatCard description={text} key={text} />
        ))}
      </CatCardsContainer>
      <ShuffleButton onClick={fetchCatsData}>Shuffle</ShuffleButton>
    </CatsContentWrapper>
  );
};