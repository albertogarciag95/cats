import React from 'react';
import { Card, CardContent, CardImage, CardDescription, CardLink } from './cat-card.styles';

type CatCardProps = {
  description: string,
  imageUrl: string
};

export const CatCard = ({ description, imageUrl }: CatCardProps) => (
  <Card>
      <CardImage image={imageUrl} />
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <CardLink>Read more</CardLink>
      </CardContent>
  </Card>
);