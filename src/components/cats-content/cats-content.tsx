import React from 'react';
import { CatCard } from '../cat-card/cat-card';
import { CatCardsContainer } from './cats-content.styles';

export const CatsContent = () => (
  <CatCardsContainer>
    <CatCard 
      imageUrl={'../../assets/background.jpg'} 
      description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi ut, dignissimos aperiam officiis, est modi ea tempora esse alias facere animi molestias natus sed incidunt cupiditate. Reprehenderit, sunt blanditiis!"} />
    <CatCard 
      imageUrl={'../../assets/background.jpg'} 
      description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi ut, dignissimos aperiam officiis, est modi ea tempora esse alias facere animi molestias natus sed incidunt cupiditate. Reprehenderit, sunt blanditiis!"} />
    <CatCard 
      imageUrl={'../../assets/background.jpg'} 
      description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi ut, dignissimos aperiam officiis, est modi ea tempora esse alias facere animi molestias natus sed incidunt cupiditate. Reprehenderit, sunt blanditiis!"} />
    <CatCard 
      imageUrl={'../../assets/background.jpg'} 
      description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi ut, dignissimos aperiam officiis, est modi ea tempora esse alias facere animi molestias natus sed incidunt cupiditate. Reprehenderit, sunt blanditiis!"} />
  </CatCardsContainer>
);