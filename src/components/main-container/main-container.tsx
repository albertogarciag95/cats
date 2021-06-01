import React from 'react';
import { CatsContainer, ShuffleButton, CatsContentWrapper, CatsTitle } from './main-container.styles';
import { CatsContent } from '../cats-content/cats-content';

export const MainContainer = () => (
  <CatsContainer>
    <CatsTitle>Random Cat stuff</CatsTitle>
    <CatsContentWrapper>
      <CatsContent />
      <ShuffleButton>Shuffle</ShuffleButton>
    </CatsContentWrapper>
  </CatsContainer>
);