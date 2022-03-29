import React, {useEffect} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import SplashScreen from 'react-native-splash-screen';

import Provider from './navigation';
import {darkTheme, lightTheme} from './style/ThemeMode';

//react-native-gesture-handler 업데이트 메시지 무시
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Cannot update a component (`StopWatchAPI`) while rendering a different component (`StopWatch`).',
  'componentWillReceiveProps has been renamed, and is not recommended for use.',
]);

const App = () => {
  const isLight = useColorScheme() === 'light';
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Provider></Provider>
    </ThemeProvider>
  );
};

export default App;
