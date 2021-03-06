import styled from 'styled-components';

export const MAX_DESCRIPTION_LENGTH = 114;

export const CardContainer = styled.div`
  flex-basis: 40%;
  margin: 1em;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  @media (max-width: 966px) {
    flex-basis: 100%;
  }
`;

export const CardContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CardImage = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
`;

export const CardDescription = styled.span`
  margin-top: 10px;
  ${props => {
    if(props.children.length > MAX_DESCRIPTION_LENGTH) {
      return`
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;`
    } 
  }}
`;

CardImage.displayName = 'CardImage';
CardDescription.displayName = 'CardDescription';