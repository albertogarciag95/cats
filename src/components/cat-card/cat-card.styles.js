import styled from 'styled-components';

export const Card = styled.div`
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
`;

export const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
`;

export const CardDescription = styled.span`
  margin-top: 10px;
  height: 37px;
  overflow: hidden;
`;

export const CardLink = styled.a`
  margin-top: 10px;
  color: blue;
  cursor: pointer;
`;