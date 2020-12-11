import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: white;
  color: #4285f4;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #dbdbdb;
    color: white;
  }
`;

const primaryButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? primaryButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;
  text-align: center;
  margin: 5px 0px;

  ${getButtonStyles}
`;
