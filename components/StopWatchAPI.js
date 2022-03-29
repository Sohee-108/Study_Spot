import React, {useState} from 'react';
import styled from 'styled-components';
import {useColorScheme} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Stopwatch} from 'react-native-stopwatch-timer';

const StopWatchAPI = () => {
  const isLight = useColorScheme() === 'light';

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [laps, setLaps] = useState([]);
  const [currentTime, setCurrentTime] = useState();

  const toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  };

  const resetStopwatch = () => {
    setStart(false);
    setReset(true);
    lapsClear();
  };

  const lapsStopwatch = () => {
    if (start == 'start' || currentTime == '00:00:00:000') {
      console.log('스탑워치를 시작해주세요!');
    } else {
      console.log('currentTime: ', currentTime);
      laps.push(currentTime);
      setLaps(laps);
      console.log(laps);
    }
  };

  const lapsClear = () => {
    setLaps([]);
    console.log(laps);
  };

  const data = [];
  for (let i = 0; i < laps.length; i++) {
    data.push({id: i + 1, laps: laps[i]});
  }

  const lapslist = ({item}) => (
    <LapsView>
      <LapsIdText>Laps {item.id}</LapsIdText>
      <LapsText>{item.laps}</LapsText>
    </LapsView>
  );

  return (
    <CenteredView>
      <StopwatchView>
        <Stopwatch
          laps
          msecs
          start={start}
          reset={reset}
          options={isLight ? lightoptions : darkoptions}
          getTime={time => {
            if (time != currentTime) {
              setCurrentTime(time);
            }
          }}
        />
        <WatchText style={{left: 411}}>hour</WatchText>
        <WatchText style={{left: 482}}>minute</WatchText>
        <WatchText style={{left: 557}}>second</WatchText>
        <WatchText style={{left: 637}}>millisecond</WatchText>
      </StopwatchView>

      <ButtonView>
        <MenuButton onPress={toggleStopwatch}>
          <MenuText>{!start ? 'Start' : 'Stop'}</MenuText>
        </MenuButton>
        <MenuButton onPress={resetStopwatch}>
          <MenuText>Reset</MenuText>
        </MenuButton>
      </ButtonView>
      <ButtonView>
        <MenuButton onPress={lapsStopwatch}>
          <MenuText>Laps</MenuText>
        </MenuButton>
        <MenuButton onPress={lapsClear}>
          <MenuText>Clear</MenuText>
        </MenuButton>
      </ButtonView>
      <FlatList
        style={{
          width: 380,
          height: 120,
        }}
        data={data}
        renderItem={lapslist}
        keyExtractor={item => item.id}
        disableVirtualization={false}
      />
    </CenteredView>
  );
};

export default StopWatchAPI;

// #region styled-component 부분
const CenteredView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const StopwatchView = styled.View`
  flex: 0.4;
  background-color: ${props => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 3%;
  padding-left: 100%;
  padding-right: 100%;
`;

const WatchText = styled.Text`
  position: absolute;
  font-size: 13px;
  color: ${props => props.theme.typeTextColor};
  top: 85%;
`;

const ButtonView = styled.View`
  flex-direction: row;
`;

const MenuButton = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 30px;
  border-color: ${props => props.theme.textColor};
  width: 110px;
  height: 65px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const MenuText = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  color: ${props => props.theme.textColor};
`;

const LapsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom-width: 0.3px;
  border-color: ${props => props.theme.menuBorderBottom};
`;

const LapsIdText = styled.Text`
  font-size: 20px;
  line-height: 45px;
  letter-spacing: 1px;
  color: ${props => props.theme.textColor};
`;

const LapsText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 2px;
  width: 200px;
  color: ${props => props.theme.textColor};
`;

//StopWatch Style Component
const lightoptions = {
  container: {
    width: 335,
    height: 100,
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: '#313131',
    letterSpacing: 2,
  },
};

const darkoptions = {
  container: {
    width: 335,
    height: 100,
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: '#ffffff',
    letterSpacing: 2,
  },
};
// #endregion
