import React, { useState } from 'react';
import { TextInput, View, Text, Linking, Alert, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import * as utility from '../../utility/index';
import * as Service from '../../api/Service';
import * as url from '../../api/url';

const Register = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [mobileNo, setMobileno] = useState('1223333333333');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpass, setConfpass] = useState('');

    const create = async () => {
        if (await utility.isFieldEmpty(firstName && lastName && email && password && confpass && mobileNo)) {
            return Alert.alert("You have to fill all required field")
        }else if (await utility.isValidEmail(email)) {
            return Alert.alert("Please enter the valid email id")
        } else if (mobileNo.length < 8) {
            return Alert.alert("please fill valid mobileno")
        }else if (await utility.isValidComparedPassword(password, confpass)) {
            return Alert.alert("Please check your password and confirm password")
        }else if(toggleCheckBox ==false){
return Alert.alert("Please checked Teams and conditions ")
        }
        else {
            let body = {
                firstName: firstName,
                lastName: lastName,
                mobileNo: mobileNo,
                email: email,
                password: password,
                confpass: confpass,
                alternateMobileNo: "string",
                role: "customer",
                country: "string",
                address: "string",
                dob: "string",
                anniversary: "string",
                customerGroup: "string",
                workDetails: {
                  companyName: "string",
                  companyPhone: "string",
                  companyAddress: "string"
                },
                otherInformation: {
                  hobbies: "string",
                  interests: "string",
                  isMarried: false,
                  companionName: "string",
                  anniversary: "string",
                  kids: [
                    {
                      name: "string",
                      birthdate: "string"
                    }
                  ]
                }
              }
              let response=await Service.post(url.REGISTER,'',body)
              console.log("response",response);
              if (response.statusCode == 200) {
                navigation.navigate('Login')   
                return Alert.alert("Registered Successfully")    
                        
            }  else if (response.statusCode == 303) {
                return Alert.alert(email, "Email id already registered")                
            }  
            else{
                return Alert.alert(response.error)
            }
        }   
    }
    
    return (
        <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: "10%" }}>
                    <MaterialCommunityIcons name="account-box" color="white" size={70}>
                    </MaterialCommunityIcons>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-evenly' }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '30%' }}>
                        <TextInput placeholder='First Name' placeholderTextColor='white' onChangeText={(fname) => setFirstname(fname)}></TextInput>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '30%' }}>
                        <TextInput placeholder='Last Name' placeholderTextColor='white' onChangeText={(lname) => setLastname(lname)}></TextInput>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: '5%', marginLeft: "13%", marginRight: '13%' }}>
                    <TextInput placeholder='Email' placeholderTextColor='white' onChangeText={(email) => setEmail(email)}></TextInput>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: '5%', marginLeft: "13%", marginRight: '13%' }}>
                    <TextInput placeholder='Mobile No.' placeholderTextColor='white' onChangeText={(text) => setMobileno(text)}></TextInput>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: '5%', marginLeft: "13%", marginRight: '13%' }}>
                    <TextInput placeholder='Password' placeholderTextColor='white' onChangeText={(password) => setPassword(password)} secureTextEntry={true}></TextInput>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: '5%', marginLeft: "13%", marginRight: '13%' }}>
                    <TextInput placeholder='Confirm Password' placeholderTextColor='white' onChangeText={(confpass) => setConfpass(confpass)} secureTextEntry={true}></TextInput>
                </View>
                <View style={{ marginLeft: '13%', marginTop: '5%', alignItems: 'center', flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newvalue) => setToggleCheckBox(newvalue)}
                       
                    />
                    <Text style={{ fontSize: 17 }}>
                        <Text>I accept the </Text>
                        <TouchableOpacity onPress={() => Linking.openURL('http://65.0.93.145/bluff/public/privacy')}>
                            <Text style={{ fontWeight: 'bold', borderBottomWidth: 1 }}> Terms of Use & Privacy Policy</Text>
                        </TouchableOpacity>
                    </Text>

                </View>
                <TouchableOpacity onPress={()=>create()}>
                    <View style={{
                        backgroundColor: 'white', alignItems: "center", marginTop: '10%', borderRadius: 10, padding: 10,
                        marginLeft: '15%', marginRight: '15%'
                    }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Register Now</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Register;