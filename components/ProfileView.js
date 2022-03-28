import React, {useContext} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../navigation/AuthProvider';

// #region styled-component 부분
const View = styled.View`
  flex: 0.3;
  position: absolute;
  top: 0px;
  width: 1000px;
  height: 200px;
  align-items: center;
  background-color: ${props => props.theme.basicColor};
`;

const ProfileImage = styled.Image`
  position: absolute;
  top: 13px;
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

const ProfileName = styled.Text`
  position: absolute;
  top: 95px;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 18px;
  color: ${props => props.theme.textColor};
`;

const ProfileEmail = styled.Text`
  position: absolute;
  top: 120px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.emailText};
`;
// #endregion

const ProfileView = () => {
  const {user} = useContext(AuthContext);

  return (
    <View>
      <ProfileImage source={{uri: user.photoURL}} />
      <ProfileName>{user.displayName}</ProfileName>
      <ProfileEmail>{user.email}</ProfileEmail>
    </View>
  );
};

export default ProfileView;
