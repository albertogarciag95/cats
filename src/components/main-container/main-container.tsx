import React, { useEffect, useState } from 'react';
import { CatsContainer, ShuffleButton, CatsContentWrapper, CatsTitle } from './main-container.styles';
import { CatsContent } from '../cats-content/cats-content';

export const MainContainer = () => {
  const [catFacts, setCatFacts] = useState([]);
  
  useEffect(() => {
    fetchCatsData()
  }, []);

  const fetchCatsData = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
      .then(response => response.json())
      .then(responseCatFacts => setCatFacts(responseCatFacts))
  }

  return (
    <CatsContainer>
      <CatsTitle>Random Cat stuff</CatsTitle>
      <CatsContentWrapper>
        <CatsContent catFacts={catFacts} />
        <ShuffleButton onClick={fetchCatsData}>Shuffle</ShuffleButton>
      </CatsContentWrapper>
    </CatsContainer>
  );
};