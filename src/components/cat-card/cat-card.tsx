import React, { useEffect, useState } from 'react';
import { 
  CardContainer, 
  CardContent, 
  CardDescription,
  CardImage,
  CardImageWrapper,
  MAX_DESCRIPTION_LENGTH
} from './cat-card.styles';

import { CardLink } from '../card-link/card-link';

type CatCardProps = {
  description: string
};

export const CatCard = ({ description }: CatCardProps) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://cataas.com/cat?width=500', { cache: 'reload' })
      .then((image: Response) => image.blob())
      .then((blob: Blob) => URL.createObjectURL(blob))
      .then((url: string) => setImageUrl(url))
  }, [description])

  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage alt='cat' src={imageUrl} />
      </CardImageWrapper>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <CardLink {...{ description }} maxDescriptionLength={MAX_DESCRIPTION_LENGTH} />
      </CardContent>
    </CardContainer>
  );
};