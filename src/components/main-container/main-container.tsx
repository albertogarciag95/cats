import React from 'react';
import { CatsContainer, CatsTitle } from './main-container.styles';
import { CatsContent } from '../cats-content/cats-content';

export const MainContainer = () => (
  <CatsContainer>
    <CatsTitle>Random Cat stuff</CatsTitle>
    <CatsContent />
  </CatsContainer>
);