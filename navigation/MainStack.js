import React from 'react';
import styled from 'styled-components';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StopWatch from '../screens/StopWatch';
import Schedule from '../screens/Schedule';
import SettingStack from './SettingStack';

const TabBarIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

const MainStack = () => {
  const BottomTab = createBottomTabNavigator();
  const isLight = useColorScheme() === 'light';

  return (
    <BottomTab.Navigator firstRoute="Menu">
      <BottomTab.Screen
        name="StopWatch"
        component={StopWatch}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#313131',
                tabBarStyle: {backgroundColor: '#e5d6c6'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/lightmode/stopwatchBlack.png')}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: '#313131',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: {backgroundColor: '#84735E'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/darkmode/stopwatchWhite.png')}
                  />
                ),
              }
        }
      />

      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#313131',
                tabBarStyle: {backgroundColor: '#E5D5C6'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/lightmode/scheduleBlack.png')}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: '#313131',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: {backgroundColor: '#84735E'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/darkmode/scheduleWhite.png')}
                  />
                ),
              }
        }
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingStack}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#313131',
                tabBarStyle: {backgroundColor: '#E5D5C6'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/lightmode/settingsBlack.png')}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: '#313131',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: {backgroundColor: '#84735E'},
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require('../assets/icon/darkmode/settingsWhite.png')}
                  />
                ),
              }
        }
      />
    </BottomTab.Navigator>
  );
};

export default MainStack;
