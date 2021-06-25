import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Button, Text, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TimePicker } from 'react-native-simple-time-picker';
import moment from 'moment'
import * as utility from '../../utility/index';
import * as Service from '../../api/Service';
import * as url from '../../api/url';

const Add_Event = ({navigation}) => {
   const [date, setDate] = useState(new Date(1598051730000));
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
   const [isModalVisible, setModalVisible] = useState(false);
   const [selected, setSelected] = useState('')
   const [selectedHours, setSelectedHours] = useState(0);
   const [selectedMinutes1, setSelectedMinutes1] = useState(0);
   const [selectedHours1, setSelectedHours1] = useState(0);
   const [selectedMinutes, setSelectedMinutes] = useState(0);
   const [selectTime, setSelectTime] = useState('');
   const [start, setStart] = useState('');
   const [time, setTime] = useState('');
   const [durationMinutes, setDurationMinute] = useState('');
   const [durationHours, setDurationHours] = useState('');
   const[userId, setuserId] = useState('');
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');

   const onChange = (event, selectedDate) => {

      const start = moment(new Date(selectedDate).getTime()).format('DD-MM-YYYY')
      // const begin = moment(new TimeRanges(selectedTime).getTime()).format('HH-MM-SS')
      //const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setSelected(start);


      console.log(selectedDate)
      //console.log(selectedTime)
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   const showDatepicker = () => {
      showMode('date');
   };

   const showTimepicker = () => {
      showMode('time');
   };

   const toggleModal = () => {
      setModalVisible(!isModalVisible);

   };

   const backupData = [
      { label: 'Local', value: 0 },
      { label: 'Drive', value: 1 }

   ];

   const AddEvent = async () => {
      if (await utility.isFieldEmpty(start && name && description && time && durationHours && durationMinutes )) {
          return Alert.alert("You have to fill all required field")
      }else {
          let body = {
         userId: '',
            start: start,
            time: time,
            durationHours: durationHours,
            durationMinutes: durationMinutes,
            name: name,
            description: description,
            }

            let response=await Service.post(url.Add_Event,'',body)
          
            console.log("response",response);
            console.log("body",body);
             if (response.statusCode == 200) {
               await utility.setInLocalStorge('userId')
                   navigation.navigate('BottomStackHome')
              return Alert.alert("Event added")                 
          } else{
              return Alert.alert(response.error)
          }
        
      }         
  }
  
   return (
      <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>
<ScrollView>
         {/* <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "30%"
         }}>
            <MaterialCommunityIcons name="calendar" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               
               <TextInput placeholder='Start Date' placeholderTextColor='white' onChangeText={(start)=>setStart(start)}
                  style={{ marginLeft: '2%' }} value={selected}></TextInput>
               <TouchableOpacity onPress={() => showDatepicker()}>
                  <View style={{ marginLeft: '64%' }}>
                     <MaterialCommunityIcons name="menu-down" color="white" size={50} />
                  </View>
               </TouchableOpacity>
            </View>

          

            {show && (
               <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
               />
            )}
         </View> */}

         {/* <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clock" color="white" size={30}>
            </MaterialCommunityIcons>
         
            <TimePicker
               selectedHours={selectedHours}
               //initial Hourse value
               selectedMinutes={selectedMinutes}
               //initial Minutes value
               onChange={(hours, minutes) => {
                  setSelectedHours(hours);
                  setSelectedMinutes(minutes);
               }}
            />
         </View> */}
         {/* <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clock" color="white" size={30}>
            </MaterialCommunityIcons>

            <TimePicker
               selectedHours1={selectedHours1}
               //initial Hourse value
               selectedMinutes1={selectedMinutes1}
               //initial Minutes value
               onChange={(hours, minutes) => {
                  setSelectedHours1(hours);
                  setSelectedMinutes1(minutes);
               }}
            />
         </View> */}

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "20%"
         }}>
            <MaterialCommunityIcons name="calendar" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               <TextInput placeholder='Start Date' placeholderTextColor='white' onChangeText={(date)=>setStart(date)}
                  style={{ marginLeft: '2%' }} ></TextInput>
            </View>
         </View>

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clock" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               <TextInput placeholder='Time' placeholderTextColor='white' onChangeText={(time)=>setTime(time)}
                  style={{ marginLeft: '2%' }} ></TextInput>
            </View>
         </View>

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clock" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               <TextInput placeholder='duration Hours' placeholderTextColor='white' onChangeText={(hours)=>setDurationHours(hours)}
                  style={{ marginLeft: '2%' }} ></TextInput>
            </View>
         </View>

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clock" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               <TextInput placeholder='duration Minutes' placeholderTextColor='white' onChangeText={(minutes)=>setDurationMinute(minutes)}
                  style={{ marginLeft: '2%' }} ></TextInput>
            </View>
         </View>

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="account" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               <TextInput placeholder='Name' placeholderTextColor='white' onChangeText={(name)=>setName(name)}
                  style={{ marginLeft: '2%' }} ></TextInput>
            </View>
         </View>

         <View style={{
            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
            marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
         }}>
            <MaterialCommunityIcons name="clipboard-text-outline" color="white" size={30}>
            </MaterialCommunityIcons>
            <View style={{ flexDirection: 'row' }}>
               {/* <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Date</Text> */}
               <TextInput placeholder='Discription' placeholderTextColor='white'style={{ marginLeft: '2%' }} 
               onChangeText={(description)=>setDescription(description)}></TextInput>
            </View>
         </View>
         <TouchableOpacity onPress={()=>AddEvent()}>
    <View style={{backgroundColor:'white', alignItems:"center", marginTop:'20%', borderRadius:10, padding: 10,
marginLeft:'15%', marginRight:'15%'}}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Add Event</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
      </View>
   )
}

export default Add_Event;