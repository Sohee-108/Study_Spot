import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Provider from './navigation';
import {darkTheme, lightTheme} from './style/ThemeMode';
import {LogBox} from 'react-native';

//react-native-gesture-handler 업데이트 메시지 무시
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const isLight = useColorScheme() === 'light';

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Provider></Provider>
    </ThemeProvider>
  );
};

export default App;
