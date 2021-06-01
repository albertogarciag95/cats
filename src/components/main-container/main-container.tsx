import React, { useEffect, useState, useRef } from 'react';
import { CatsContainer, ShuffleButton, CatsContentWrapper, CatsTitle } from './main-container.styles';
import { CatsContent } from '../cats-content/cats-content';

export const MainContainer = () => {
  const [catFacts, setCatFacts] = useState([]);
  
  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
      .then(response => response.json())
      .then(catFacts => setCatFacts(catFacts))
  }, []);

  return (
    <CatsContainer>
      <CatsTitle>Random Cat stuff</CatsTitle>
      <CatsContentWrapper>
        <CatsContent catFacts={catFacts} />
        <ShuffleButton>Shuffle</ShuffleButton>
      </CatsContentWrapper>
    </CatsContainer>
  );
};