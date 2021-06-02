import styled from 'styled-components';

export const LinkText = styled.a`
  margin-top: 10px;
  color: blue;
  cursor: pointer;
  heigth: 30px;
  ${props => {
    if(!props.isShown) {
      return `visibility: hidden`;
    }
  }}
`;

export const CardPopup = styled.div`
  padding: 20px;
  background-color: #0ea5c8;
  opacity: .9;
  position: absolute;
  min-width: 200px;
  max-width: 400px;
  top: 100%;
`;

export const CardPopupButton = styled.button`
  display: block;
  background-color: blue;
  color: white;
  border-radius: 30px;
  width: 80px;
  margin-top: 20px;
`