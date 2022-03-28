import React from 'react';
import {useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Setting from '../screens/Setting';
import Support from '../screens/Support';
import Theme from '../screens/Theme';

const Stack = createStackNavigator();

const SettingStack = () => {
  const isLight = useColorScheme() === 'light';

  const settingLightOptions = {
    headerStyle: {
      backgroundColor: '#e5d5c6',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff',
    },
    headerBackTitleVisible: false,
    headerBackButtonMenuEnabled: false,
    headerTintColor: '#ffffff',
  };

  const settingDarkOptions = {
    headerStyle: {
      backgroundColor: '#84735E',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#313131',
    },
    headerBackTitleVisible: false,
    headerBackButtonMenuEnabled: false,
    headerTintColor: '#313131',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen
        name="Support"
        component={Support}
        options={({navigation}) =>
          isLight ? settingLightOptions : settingDarkOptions
        }
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={({navigation}) =>
          isLight ? settingLightOptions : settingDarkOptions
        }
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
