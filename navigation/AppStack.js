import React from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './MainStack';

const AppStack = () => {
  const isLight = useColorScheme() === 'light';
  const BottomTab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
