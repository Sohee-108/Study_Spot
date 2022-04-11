import React, {useState, useEffect} from 'react';
import {Alert, useColorScheme} from 'react-native';
import styled from 'styled-components';
import {Agenda} from 'react-native-calendars';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

const Schedule = () => {
  const isLight = useColorScheme() === 'light';

  const [isModalVisible, setModalVisible] = useState(false);
  const [scheduleList, setScheduleList] = useState({});

  var [id, setId] = useState(1);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  //Modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //일정 추가 모달 내용 초기화
  const allClear = () => {
    setDay('');
    setTime('');
    setName('');
    setContent('');
  };

  //일정 추가
  const addSchedule = () => {
    try {
      // 여기서부터 scheduleList에 값 추가
      var _scheduleList = {...scheduleList};
      if (_scheduleList[day]) {
        id = id + 1;
        _scheduleList[day].push({id, time, name, content});
      } else {
        _scheduleList[day] = [{id, time, name, content}];
      }

      const jsonValue = JSON.stringify(_scheduleList);
      console.log(_scheduleList);
      AsyncStorage.setItem('@spot_key', jsonValue);

      setScheduleList(scheduleList);
      toggleModal();
      getData();
      allClear();
    } catch (e) {
      console.log('error: ' + e);
    }
  };

  //일정 가져오기
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@spot_key');
      if (value !== null) {
        setScheduleList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log('error: ' + e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //일정 모두 삭제
  const deleteData = () => {
    Alert.alert(
      '삭 제',
      '일정을 모두 삭제하시겠습니까?',
      [
        {
          text: '네',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('@spot_key');
              getData();
              setScheduleList({});
              console.log(scheduleList);
            } catch (e) {
              console.log('error' + e);
            }
          },
        },
        {
          text: '아니오',
          onPress: () => console.log('아니오'),
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <CalendarView>
      <Agenda
        style={{width: '100%', height: '100%'}}
        theme={
          isLight
            ? {
                textSectionTitleColor: '#313131',
                monthTextColor: '#313131',
                dayTextColor: '#313131',
                calendarBackground: '#ffffff',
                selectedDayBackgroundColor: '#8C8C8C',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#8C8C8C',
                dotColor: '#8C8C8C',
                agendaDayTextColor: '#313131',
                agendaDayNumColor: '#313131',
                agendaTodayColor: '#8C8C8C',
                agendaKnobColor: '#8C8C8C',
                backgroundColor: '#ffffff',
                textMonthFontSize: 18,
              }
            : {
                textSectionTitleColor: '#ffffff',
                monthTextColor: '#ffffff',
                dayTextColor: '#ffffff',
                calendarBackground: '#353535',
                selectedDayBackgroundColor: '#8C8C8C',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#84735e',
                dotColor: '#8C8C8C',
                agendaDayTextColor: '#ffffff',
                agendaDayNumColor: '#ffffff',
                agendaTodayColor: '#8C8C8C',
                agendaKnobColor: '#8C8C8C',
                backgroundColor: '#353535',
                textMonthFontSize: 18,
              }
        }
        showClosingKnob={true}
        items={scheduleList}
        renderItem={items => {
          return (
            <AgendaView>
              <ScheduleBtn>
                <ScheduleTitle>
                  {items.name} ({items.time})
                </ScheduleTitle>
                <ScheduleContent>{items.content}</ScheduleContent>
              </ScheduleBtn>
            </AgendaView>
          );
        }}
        // 날짜, 데이터 모두 없을 때 빈화면 로딩
        renderEmptyData={() => {
          return (
            <EmptyView>
              <EmptyText>
                일정이 없습니다. {'\n'}새로운 일정을 추가해보세요.
              </EmptyText>
            </EmptyView>
          );
        }}
      />
      <AddButton1 onPress={toggleModal}>
        <ButtonImage
          source={
            isLight
              ? require('../assets/icon/lightmode/addBlack.png')
              : require('../assets/icon/darkmode/addWhite.png')
          }
        />
      </AddButton1>
      <DeleteBtn onPress={deleteData}>
        <ButtonImage
          source={
            isLight
              ? require('../assets/icon/lightmode/cancelBlack.png')
              : require('../assets/icon/darkmode/cancelWhite.png')
          }
        />
      </DeleteBtn>

      <Modal isVisible={isModalVisible}>
        <AddScheduleView>
          <AddValue
            placeholder="날짜 ex)2021-05-13"
            value={day}
            onChangeText={content => setDay(content)}></AddValue>
          <AddValue
            placeholder="일정시간 ex)17:00~20:00"
            value={time}
            onChangeText={content => setTime(content)}></AddValue>
          <AddValue
            placeholder="일정이름"
            title="name"
            value={name}
            onChangeText={content => setName(content)}></AddValue>
          <AddValue
            placeholder="일정내용"
            value={content}
            onChangeText={content => setContent(content)}></AddValue>
          <AddButton2
            title="add"
            onPress={() => {
              addSchedule();
            }}>
            <AddText>일정 추가</AddText>
          </AddButton2>
          <AddButton2 title="back" onPress={toggleModal}>
            <AddText>취소</AddText>
          </AddButton2>
        </AddScheduleView>
      </Modal>
    </CalendarView>
  );
};

export default Schedule;

// #region styled-component 부분
const CalendarView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;

const AgendaView = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 75px;
  padding-left: 5%;
  margin-top: 5%;
  border-radius: 30px;
  border-width: 0.7px;
  border-color: ${props => props.theme.textColor};
`;

const EmptyView = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-width: 0.7px;
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
  height: 75px;
  border-color: ${props => props.theme.textColor};
`;

const EmptyText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;

const ScheduleBtn = styled.TouchableOpacity`
  justify-content: center;
  padding: 10px;
`;

const ScheduleTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;

const ScheduleContent = styled.Text`
  margin-left: 2%;
  margin-top: 2%;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;

const AddButton1 = styled.TouchableOpacity`
  position: absolute;
  width: 70px;
  height: 50px;
  left: 75%;
  top: 92%;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  margin-bottom: 10%;
`;

const DeleteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 70px;
  height: 50px;
  left: 5%;
  top: 92%;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  margin-bottom: 10%;
`;

const ButtonImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const AddScheduleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AddButton2 = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${props => props.theme.basicColor};
  margin-top: 10px;
`;

const AddText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColor};
`;

const AddValue = styled.TextInput`
  background-color: ${props => props.theme.backgroundColor};
  font-size: 16px;
  width: 80%;
  height: 7%;
  border-radius: 30px;
  padding: 5%;
  padding-left: 15%;
  margin-bottom: 30px;
  color: ${props => props.theme.textColor};
`;
// #endregion
