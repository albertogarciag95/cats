import styled from 'styled-components';

export const Card = styled.div`
  flex: 0 1 40%;
  margin: 20px;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
`;

export const CardContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  width: 100%;
  height: 100px;
`;

export const CardDescription = styled.span`
  margin-top: 10px;
  height: 100%;
`;

export const CardLink = styled.a`
  margin-top: 10px;
  color: blue;
  cursor: pointer;
`;