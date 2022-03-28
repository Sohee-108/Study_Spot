import React from 'react';
import styled from 'styled-components';
import {useColorScheme} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import ProfileView from '../components/ProfileView';
import LogoutButton from '../components/LogoutButton';

// #region styled-component 부분
const CenteredView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MenuView = styled.View`
  flex: 0.7;
  position: absolute;
  top: 150px;
  width: 100%;
  height: 80%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
`;

const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
  border-bottom-width: 0.3px;
  border-color: ${props => props.theme.menuBorderBottom};
`;

const MenuIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

const MenuText = styled.Text`
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.menuText};
`;

const ArrowIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
// #endregion

const Setting = ({navigation}) => {
  const isLight = useColorScheme() === 'light';
  const menu = [
    {
      id: '1',
      title: 'Theme',
      name: 'Theme',
      iconlight: require('../assets/icon/lightmode/themeBlack.png'),
      icondark: require('../assets/icon/darkmode/themeWhite.png'),
      arrowlight: require('../assets/icon/lightmode/arrowrightBlack.png'),
      arrowdark: require('../assets/icon/darkmode/arrowrightWhite.png'),
    },
    {
      id: '2',
      title: 'Support',
      name: 'Support',
      iconlight: require('../assets/icon/lightmode/supportBlack.png'),
      icondark: require('../assets/icon/darkmode/supportWhite.png'),
      arrowlight: require('../assets/icon/lightmode/arrowrightBlack.png'),
      arrowdark: require('../assets/icon/darkmode/arrowrightWhite.png'),
    },
  ];

  const menuBorder = ({item}) => (
    <MenuButton onPress={() => navigation.navigate(item.name)}>
      <MenuIcon source={isLight ? item.iconlight : item.icondark} />
      <MenuText>{item.title}</MenuText>
      <ArrowIcon source={isLight ? item.arrowlight : item.arrowdark} />
    </MenuButton>
  );

  return (
    <CenteredView>
      <ProfileView />
      <MenuView>
        <FlatList
          style={{
            width: 350,
            height: 100,
          }}
          data={menu}
          renderItem={menuBorder}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <LogoutButton />
      </MenuView>
    </CenteredView>
  );
};
export default Setting;
