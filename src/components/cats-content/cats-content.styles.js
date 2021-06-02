import styled from 'styled-components';

export const CatCardsContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
`;

export const ShuffleButton = styled.button`
  font-size: 2em;
  border-radius: 30px;
  background-color: orange;
  font-family: 'Chango', cursive;
  margin: 1em;
  cursor: pointer;
  min-width: 200px;
`;

export const CatsContentWrapper = styled.div`
  width: 60%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  height: 90%;
`;
