import styled, { css } from 'styled-components';


const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
        &:hover {
        background-color: white;
        color: black;
        border: 0.5px solid black;
    }
`;

const invertedButtonStyles = css`
     background: #ffffff;
    color: rgb(0, 0, 0);
    border: 1px solid black;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    

    &:hover{
      background: #000000;
      color: white;
      border: none;
    }
`;
const googleSignInStyles = css`
    background: #4285f4;
    color: white;
    border: none;

    &:hover{
      background: #357ae8;
      border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }
    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
${getButtonStyles}
  
`;