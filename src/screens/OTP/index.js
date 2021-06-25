import React, { useState } from 'react';
import { useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, TextInput, Text, TouchableOpacity, OTPTextInput, ScrollView } from 'react-native';
const Otp = ({ navigation }) => {
const [otp1, setotp1] = useState("")
const [otp2, setotp2] = useState("")
const [otp3, setotp3] = useState("")
const [otp4, setotp4] = useState("")
const [otp5, setotp5] = useState("")
const ref_input1 = useRef();
const ref_input2 = useRef();
const ref_input3 = useRef();
const ref_input4 = useRef();
const ref_input5 = useRef();


return (
<View style={{ backgroundColor:'#52BE80', height: '100%', width: '100%' }}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop:"40%"}}>
    <MaterialCommunityIcons name="lock-open-check" color="white" size={80}>
      </MaterialCommunityIcons>
    </View>
    <View style={{marginTop:'10%', alignItems:'center'}}>
        <Text style={{fontSize:18}}>Please enter your verification code.</Text>
    </View>
    <View style={{marginTop:'5%', alignItems:'center'}}>
        <Text>We have sent a verification code to your registered email id.</Text>
    </View>
<View style={{
flexDirection: 'row', justifyContent: 'space-evenly',
alignItems: 'center', marginTop: '10%', marginLeft: '20%', marginRight: '20%'
}}>
<View style={{ borderBottomWidth: 1, borderBottomColor:'white' }}>
<TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input1}
onChangeText={otp1 => {
setotp1(otp1)
if (otp1) ref_input2.current.focus();
}}></TextInput>
</View>
<View style={{ borderBottomWidth: 1, borderBottomColor:'white' }}>
<TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input2}
onChangeText={otp2 => {
setotp2(otp2)
if (otp2) ref_input3.current.focus();
}}></TextInput>
</View>

<View style={{ borderBottomWidth: 1, borderBottomColor:'white' }}>
<TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input3}
onChangeText={otp3 => {
setotp3(otp3)
if (otp3) ref_input4.current.focus();
}}></TextInput>
</View>
<View style={{ borderBottomWidth: 1, borderBottomColor:'white' }}>
<TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input4}
onChangeText={otp4 => {
setotp4(otp4)
if (otp4) ref_input5.current.focus();
}}></TextInput>
</View>
<View style={{ borderBottomWidth: 1, borderBottomColor:'white' }}>
<TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input5}
onChangeText={otp5 => {

setotp5(otp5)
if (otp5) ref_input5.current.focus();
}}></TextInput>
</View>

</View>
<TouchableOpacity>
<View style={{alignItems:'center', marginTop:'3%'}}>
    <Text style={{fontSize:20}}>Resend</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Change_Password')}>
    <View style={{backgroundColor:'white', alignItems:"center", marginTop:'10%', borderRadius:10, padding: 10,
marginLeft:'15%', marginRight:'15%'}}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Next</Text>
    </View>
    </TouchableOpacity>
</ScrollView>
</View>
)
}
export default Otp;