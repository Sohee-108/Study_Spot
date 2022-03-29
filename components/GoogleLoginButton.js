import React from 'react';
import styled from 'styled-components';

const GoogleLoginButton = ({...rest}) => {
  return (
    <GoogleSigninButton {...rest}>
      <GoogleIcon source={require('../assets/googleIcon.png')} />
      <GoogleText>sign-in with google</GoogleText>
    </GoogleSigninButton>
  );
};

export default GoogleLoginButton;

// #region styled-component 부분
const GoogleSigninButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 347px;
  height: 61px;
  border-color: ${props => props.theme.loginButtonBorderColor};
  border-width: 3px;
  border-radius: 5px;
  background-color: ${props => props.theme.loginButtonColor};
`;

const GoogleIcon = styled.Image`
  margin-right: 5px;
  width: 40px;
  height: 44px;
`;

const GoogleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.loginButtonTextColor};
`;
// #endregion
