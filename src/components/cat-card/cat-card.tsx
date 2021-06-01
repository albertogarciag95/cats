import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardLink } from './cat-card.styles';

type CatCardProps = {
  description: string
};

export const CatCard = ({ description }: CatCardProps) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://cataas.com/cat?width=200', { cache: 'reload' })
      .then(image => image.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(url => setImageUrl(url))
  }, [])

  return (
    <Card>
        <img alt='cat' src={imageUrl} />
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <CardLink>Read more</CardLink>
        </CardContent>
    </Card>
  );
};