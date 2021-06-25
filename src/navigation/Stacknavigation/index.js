import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/Splash';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Forgot from '../../screens/Forgot';
import OTP from '../../screens/OTP';
import Change_Password from '../../screens/Change_Password';
import Calendar from '../../screens/Calendar';
import BottomStack from '../BottomStack/index';
import Add_Event from '../../screens/Add_Event';
import Edit_Event from '../../screens/Edit_Event';
import Mainheader from '../../component/Mainheader';
import DrawerBg from '../DrawerNavigation/index'
// import Privacy_Policy from '../../screens/Privacy_Policy';

const Stack = createStackNavigator();

const MainStack =()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}}/>
        <Stack.Screen name="OTP" component={OTP} options={{headerShown:false}}/>
        <Stack.Screen name="Change_Password" component={Change_Password} options={{headerShown:false}}/>
        <Stack.Screen name="Calendar" component={Calendar} options={{headerShown:false}}/>
        <Stack.Screen name="BottomStack" component={BottomStack} options={{headerShown:false}}/>
        <Stack.Screen name="Add_Event" component={Add_Event} options={{headerShown:false}}/>
        <Stack.Screen name="Edit_Event" component={Edit_Event} options={{headerShown:false}}/>
        <Stack.Screen name="Mainheader" component={Mainheader} options={{headerShown:false}}/>
        <Stack.Screen name="DrawerBg" component={DrawerBg} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} options={{headerShown:false}}/> */}
    </Stack.Navigator>
    );
}
export default MainStack;