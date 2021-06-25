import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Change_Password=()=>{
    return(
<View style={{backgroundColor:'#52BE80', height:'100%',width:'100%'}}>
    <ScrollView>
    <View style={{alignItems:'center', marginTop:"40%"}}>
    <MaterialCommunityIcons name="account-lock" color="white" size={100}>
      </MaterialCommunityIcons>
    </View>
    <View style={{alignItems:'center', marginTop:'5%'}}>
          <Text style={{fontSize:18}}>Please enter a new password.</Text>
      </View>
    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'10%' }}>
    <MaterialCommunityIcons name="eye-off" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder='Password' placeholderTextColor='white'  secureTextEntry={true}></TextInput>
        </View>
    </View>
    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'5%' }}>
    <MaterialCommunityIcons name="eye-off" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder=' Confirm Password' placeholderTextColor='white' secureTextEntry={true}></TextInput>
        </View>
    </View>
    <TouchableOpacity>
    <View style={{backgroundColor:'white', alignItems:"center", marginTop:'10%', borderRadius:10, padding: 10,
marginLeft:'15%', marginRight:'15%'}}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Next</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
</View>
    )
}
export default Change_Password;