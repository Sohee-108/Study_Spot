import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native-gesture-handler';

const ThemeMunu = () => {
  const menu = [
    {
      id: '1',
      title: '시스템 설정 모드',
      detail: '시스템 설정에 따라 라이트 또는 다크 테마가 적용됩니다.',
    },
  ];

  const menuBorder = ({item}) => (
    <MenuView>
      <MenuText>{item.title}</MenuText>
      <DetailText>{item.detail}</DetailText>
      <CheckBox source={require('../assets/check_circle.png')} />
    </MenuView>
  );

  return (
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
  );
};

export default ThemeMunu;

// #region styled-component 부분
const MenuView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 18px;
  padding-right: 18px;
  border-bottom-width: 0.3px;
  border-color: ${props => props.theme.menuBorderBottom};
`;

const MenuText = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;

const CheckBox = styled.Image`
  width: 30px;
  height: 30px;
`;

const DetailText = styled.Text`
  position: absolute;
  left: 7%;
  top: 200%;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;
// #endregion
