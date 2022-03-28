import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import GoogleLoginButton from '../components/GoogleLoginButton';
import {AuthContext} from '../navigation/AuthProvider';

// #region styled-component 부분
const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const ItemView = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const LogoImage = styled.Image`
  margin-bottom: 300px;
  width: 350px;
  height: 133px;
`;
// #endregion

const LoginScreen = ({}) => {
  const {googleLogin} = useContext(AuthContext);

  return (
    <CenteredView>
      <ItemView>
        <LogoImage
          source={require('../assets/logo.png')}
          style={{resizeMode: 'contain'}}
        />
        <GoogleLoginButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => googleLogin()}
        />
      </ItemView>
    </CenteredView>
  );
};

export default LoginScreen;
