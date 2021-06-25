import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mainheader from '../../component/Mainheader';
const Contact_us=({navigation})=>{
    return(
<View style={{backgroundColor:'#52BE80', height:'100%',width:'100%'}}>
{/* <Mainheader props='Contact us' navigation={navigation}></Mainheader> */}
    <ScrollView>
<View style={{alignItems:'center', marginTop:'10%'}} >
  <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Contact us</Text>
</View>
    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'5%' }}>
    <MaterialCommunityIcons name="account" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder='Name' placeholderTextColor='white'></TextInput>
        </View>
    </View>

    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'5%' }}>
    <MaterialCommunityIcons name="email" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder='E-mail' placeholderTextColor='white'></TextInput>
        </View>
    </View>

    <View style={{flexDirection:'row', alignItems:"center", marginLeft:'15%', marginRight:'15%',
    borderBottomWidth:1, borderBottomColor:'white', marginTop:'5%' }}>
    <MaterialCommunityIcons name="message" color="white" size={30}>
      </MaterialCommunityIcons>
      <View style={{ marginLeft:'2%', width:'100%',  }}>
        <TextInput placeholder='Message' placeholderTextColor='white'></TextInput>
        </View>
    </View>
    <TouchableOpacity>
    <View style={{backgroundColor:'white', alignItems:"center", marginTop:'10%', borderRadius:10, padding: 10,
marginLeft:'15%', marginRight:'15%'}}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Save</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
</View>
    )
}
export default Contact_us;
