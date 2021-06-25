import React,{useEffect} from 'react';
import { Text, View} from 'react-native';

const Splash=({navigation})=>{
    useEffect(()=>{
        TimeoutHandle = setTimeout(()=>{
            data();
          }, 2000);
})
const data =()=>{
    navigation.navigate("Login")

}
    return(
        <View style={{backgroundColor:'#52BE80', height:'100%',width:'100%'}}>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:'40%'}}>
             <Text style={{fontSize:30, color:'#1C2833', fontWeight:'bold', marginTop:'40%'}}>Calendar</Text>
        </View>
    </View>
    )
}
export default Splash;