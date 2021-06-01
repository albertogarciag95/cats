import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardLink, CardImage, CardImageWrapper } from './cat-card.styles';

type CatCardProps = {
  description: string
};

export const CatCard = ({ description }: CatCardProps) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://cataas.com/cat?width=500', { cache: 'reload' })
      .then(image => image.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(url => setImageUrl(url))
  }, [description])

  return (
    <Card>
        <CardImageWrapper>
          <CardImage alt='cat' src={imageUrl} />
        </CardImageWrapper>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <CardLink>Read more</CardLink>
        </CardContent>
    </Card>
  );
};