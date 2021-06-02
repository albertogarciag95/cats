import styled from 'styled-components';
import background from "../../assets/background.jpg";

export const CatsContainer = styled.div`
  margin: 0 auto;
  background-image: url(${background});
  text-align: center;
  position: relative;
  height: 100%;
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

export const CatsTitle = styled.div`
  font-size: 3em;
  color: #0ea5c8;
  font-family: 'Chango', cursive;
  padding: .3em 0;
  @media (max-width: 966px) {
    font-size: 2em;
  }
`;