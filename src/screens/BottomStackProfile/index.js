import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button, Image, Platform, PermissionsAndroid, TextInput, } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

const Profile = () => {
  const [filePath, setFilePath] = useState({});
  const [condition, setCondition] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('')
  const onChange = (event, selectedDate) => {

     const start = moment(new Date(selectedDate).getTime()).format('DD-MM-YYYY')
     //  const currentDate = selectedDate || date;
     setShow(Platform.OS === 'ios');
     setSelected(start);
     console.log(selectedDate)
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

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };
  return (
    <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>

      <View >
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          // style={styles.imageStyle}
        />
        <Image
          source={{uri: filePath.uri}}
          // style={styles.imageStyle}
        />
        <Text>{filePath.uri}</Text> */}

        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <TouchableOpacity onPress={() => setCondition(!condition)}>
          
            {filePath.uri==undefined?
            <MaterialCommunityIcons name="account-cowboy-hat" color="white" size={100}>
            </MaterialCommunityIcons>
          //  <Image source={require('../../assets/addevent.png')} style={{ height: 100, width: 100, borderRadius: 50 }}></Image>   
              :
              <Image source={{ uri:filePath.uri }} style={{ height: 100, width: 100, borderRadius: 50 }}></Image>
          }
          </TouchableOpacity>

          {/* {condition==true?
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>captureImage('photo')}>
                <Text style={{marginRight:100,fontSize:20}}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>chooseFile('photo')}>
                <Text style={{fontSize:20}}>Gallery</Text>
                </TouchableOpacity>
            </View> :null} */}
        </View>
        {condition == true ?
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              // style={styles.buttonStyle}
              onPress={() => captureImage('photo')}>
              <MaterialCommunityIcons name="camera" color="white" size={50}>
              </MaterialCommunityIcons>
              {/* <Text>
            Launch Camera for Image
          </Text> */}
            </TouchableOpacity>
            {/* <TouchableOpacity
          activeOpacity={0.5}
          // style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text>
            Launch Camera for Video
          </Text>
        </TouchableOpacity> */}
            <TouchableOpacity
              activeOpacity={0.5}
              // style={styles.buttonStyle}
              onPress={() => chooseFile('photo')}>
              <MaterialCommunityIcons name="picture-in-picture-top-right-outline" color="white" size={50}>
              </MaterialCommunityIcons>
              {/* <Text>Choose Image</Text> */}
            </TouchableOpacity>
          </View> : null}
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
        marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "5%"
      }}>
        <MaterialCommunityIcons name="account-circle" color="white" size={30}>
        </MaterialCommunityIcons>
        <View>
          <TextInput placeholder='First Name' placeholderTextColor='white'
            style={{ marginLeft: '2%' }}></TextInput>
        </View>
      </View>
      <View style={{
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
        marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
      }}>
        <MaterialCommunityIcons name="account-circle" color="white" size={30}>
        </MaterialCommunityIcons>
        <View>
          <TextInput placeholder=' Last Name' placeholderTextColor='white'
            style={{ marginLeft: '2%' }}></TextInput>
        </View>
      </View>
      <View style={{
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
        marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
      }}>
        <MaterialCommunityIcons name="calendar" color="white" size={30}>
        </MaterialCommunityIcons>
        <View style={{flexDirection:'row'}}>
        {/* <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Date</Text> */}
          <TextInput placeholder='Date of Birth' placeholderTextColor='white'
            style={{ marginLeft: '2%' }} value={selected}></TextInput>
            <TouchableOpacity onPress={() => showDatepicker()}>
              <View style={{marginLeft:'60%'}}>
                     <MaterialCommunityIcons name="menu-down" color="white" size={50} />
                     </View>
                  </TouchableOpacity>
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
        </View>

      </View>
      <View style={{
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
        marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
      }}>
        <MaterialCommunityIcons name="email" color="white" size={30}>
        </MaterialCommunityIcons>
        <View>
          <TextInput placeholder='Email' placeholderTextColor='white'
            style={{ marginLeft: '2%' }}></TextInput>
        </View>
      </View>
      <View style={{
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white',
        marginLeft: '10%', marginRight: '10%', alignItems: 'center', marginTop: "3%"
      }}>
        <MaterialCommunityIcons name="city" color="white" size={30}>
        </MaterialCommunityIcons>
        <View>
          <TextInput placeholder='Address' placeholderTextColor='white'
            style={{ marginLeft: '2%' }}></TextInput>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{
          backgroundColor: 'white', alignItems: "center", marginTop: '10%', borderRadius: 10, padding: 10,
          marginLeft: '15%', marginRight: '15%'
        }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default Profile;