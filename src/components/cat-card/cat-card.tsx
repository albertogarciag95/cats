import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardLink, 
  CardImage, 
  CardImageWrapper, 
  MAX_DESCRIPTION_LENGTH 
} from './cat-card.styles';

type CatCardProps = {
  description: string
};

export const CatCard = ({ description }: CatCardProps) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://cataas.com/cat?width=500', { cache: 'reload' })
      .then((image: Response) => image.blob())
      .then((blob: Blob) => URL.createObjectURL(blob))
      .then((url: string) => setImageUrl(url))
  }, [description])

  return (
    <Card>
        <CardImageWrapper>
          <CardImage alt='cat' src={imageUrl} />
        </CardImageWrapper>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <CardLink 
            isShown={description.length > MAX_DESCRIPTION_LENGTH}>
              Read more
          </CardLink>
        </CardContent>
    </Card>
  );
};