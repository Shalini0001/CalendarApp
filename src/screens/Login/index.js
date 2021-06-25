import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import * as utility from '../../utility/index';
import * as Service from '../../api/Service';
import * as url from '../../api/url';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

const Login=({navigation})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const Login = async () => {
        startLoading();
    if (email == '' || password == '') {
        Alert.alert('Please fill required field')
      }
      else if (await utility.isValidEmail(email)) {
        Alert.alert('Fill valid email and password')
      }
      else {
        navigation.navigate('DrawerBg')
        // let body = {
        //   email: email,
        //   password: password,
        }
         
      //   let res = await Service.post(url.LOGIN, '', body)
      //   if(res.isSuccess==true){
      //       navigation.navigate('DrawerBg')
      //   }
      //   else{
      //     return Alert.alert(res.error)
      //   }
      //   console.log(res)
      //   await utility.setInLocalStorge('token', res.data.token)
      // }
    }

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      };

    return(
        <View style={{backgroundColor:'#52BE80', height:'100%',width:'100%'}}>
            <View style={{alignItems:'center', marginTop:'10%'}}>
            <MaterialCommunityIcons name="fingerprint" color="white" size={70}>
      </MaterialCommunityIcons>
      </View>
      <Spinner
        //visibility of Overlay Loading Spinner
        visible={loading}
      //Text with the Spinner
      // textContent={'Loading...'}
      //Text style of the Spinner Text
      // textStyle={styles.spinnerTextStyle}
      />
        <View style={{justifyContent:'center', alignItems:'center', margin:"5%",
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'5%'}}>
             <TextInput placeholder='E-mail address' placeholderTextColor='white' onChangeText={(email) => setEmail(email)}></TextInput>
        </View>
        <View style={{justifyContent:'center', alignItems:'center',  margin:"5%",
         borderBottomWidth:1, borderBottomColor:'white'}}>
             <TextInput placeholder='Password' secureTextEntry={true}  placeholderTextColor='white' onChangeText={(password) => setPassword(password)}></TextInput>
        </View>
        <TouchableOpacity onPress={()=>Login()}>
        <View style={{backgroundColor:'white', alignItems:"center", marginTop:'3%', borderRadius:10, margin:'5%', padding: 10}}>
            <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Sign in</Text>
        </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginLeft:'15%'}}>
            <Text style={{color:'black', fontSize:15}}>Can't remember your password?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
            <Text style={{color:'black', fontSize:15, fontWeight:'bold', borderBottomWidth:1, borderBottomColor:'black'}}> Recover it</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', marginTop:'50%', borderTopWidth:1, borderTopColor:'white', borderRadius:4, padding:8}}>
            <Text style={{color:'black', fontSize:17, marginLeft:'18%'}}>Don't Have an Account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text style={{color:'black', fontSize:17, fontWeight:'bold', borderBottomWidth:1, borderBottomColor:'black'}}> Create it</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
export default Login;