import React, {useContext} from 'react';
import styled from 'styled-components';
import {useColorScheme} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

// #region styled-component 부분
const Logout = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const LogoutIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const LogoutText = styled.Text`
  position: absolute;
  top: 75%;
  left: 13%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.logoutButtonText};
`;

const VerText = styled.Text`
  position: absolute;
  top: 75%;
  left: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.versionText};
`;
// #endregion

const LogoutButton = () => {
  const isLight = useColorScheme() === 'light';
  const {logout} = useContext(AuthContext);

  return (
    <Logout onPress={logout}>
      <LogoutIcon
        source={
          isLight
            ? require('../assets/icon/lightmode/logoutBlack.png')
            : require('../assets/icon/darkmode/logoutWhite.png')
        }
      />
      <LogoutText>Logout</LogoutText>
      <VerText>version 1.0</VerText>
    </Logout>
  );
};

export default LogoutButton;
