import React, { useEffect, useState } from 'react';
import { 
  LinkText, 
  CardPopup,
  CardPopupButton
} from './card-link.styles';

type CardLinkProps = {
  description: string,
  maxDescriptionLength: number
};

export const CardLink = ({ description, maxDescriptionLength }: CardLinkProps) => {
  const [isPopupShown, showPopup] = useState(false);

  useEffect(() => {
    showPopup(false)
  }, [description])

  return (
    <>
      <LinkText 
        isShown={description.length > maxDescriptionLength}
        onMouseEnter={() => showPopup(true)}>
          Read more
      </LinkText>
      {isPopupShown && (
        <CardPopup>
          <span>{description}</span>
          <CardPopupButton onClick={() => showPopup(false)}>OK</CardPopupButton>
        </CardPopup>
      )}
    </>
  );
}