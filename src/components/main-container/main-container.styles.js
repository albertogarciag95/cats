import styled from 'styled-components';
import background from "../../assets/background.jpg";

export const CatsContainer = styled.div`
  margin: 0 auto;
  background-image: url(${background});
  text-align: center;
  position: relative;
`;

export const ShuffleButton = styled.div`
  font-size: 2em;
  border-radius: 30px;
  background-color: orange;
  font-family: 'Chango', cursive;
  margin: 2em;
`;

export const CatsContentWrapper = styled.div`
  width: 70%;
  background-color: blue;
  margin: 0 auto;
`;

export const CatsTitle = styled.div`
  font-size: 3em;
  color: #0ea5c8;
  font-family: 'Chango', cursive;
  padding: .5em 0;
`;