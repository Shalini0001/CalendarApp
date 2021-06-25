import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as utility from '../../utility/index';
import * as Service from '../../api/Service';
import * as url from '../../api/url';
const Forgot=({navigation})=>{
    const [email, setEmail] = useState('');
    const Forget = async () => {
    if (email == '') {
        Alert.alert('Please fill required field')
      }
      else if (await utility.isValidEmail(email)) {
        Alert.alert('Fill valid email and password')
      }
      else {
        let body = {
          email: email,
        }
         
        let res = await Service.put(url.OTP, '', body)
        if(res.isSuccess==true){
            navigation.navigate('OTP')
        }
        else{
          return Alert.alert(res.error)
        }
        console.log(res)
        await utility.setInLocalStorge('token', res.data.token)
      }
    }
    return(
<View style={{backgroundColor:'#52BE80', height:'100%',width:'100%'}}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop:"40%"}}>
    <MaterialCommunityIcons name="account-edit" color="white" size={100}>
      </MaterialCommunityIcons>
    </View>
    <View style={{alignItems:'center', marginTop:'5%'}}>
          <Text style={{fontSize:18}}>Please enter your registered email id.</Text>
      </View>
      <View style={{alignItems:'center', marginTop:'3%', marginLeft:'11%', marginRight:'11%'}}>
          <Text>We will send a verification code to your registered email id.</Text>
      </View>
    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'15%' }}>
    <MaterialCommunityIcons name="email" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder='E-mail' placeholderTextColor='white' onChangeText={(email)=>setEmail(email)}></TextInput>
        </View>
    </View>
    <TouchableOpacity onPress={()=>Forget()}>
    <View style={{backgroundColor:'white', alignItems:"center", marginTop:'10%', borderRadius:10, padding: 10,
marginLeft:'15%', marginRight:'15%'}}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Next</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
</View>
    )
}
export default Forgot;
