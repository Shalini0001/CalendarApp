import React from 'react';
import {Text} from 'react-native';
import BottomStackHome from '../../screens/BottomStackHome/index';
import BottomStackProfile from '../../screens/BottomStackProfile/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab1 = createBottomTabNavigator();
const BottomStack = () => {
    return (
        <Tab1.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#52BE80',
                // inactiveBackgroundColor: '#52BE80',
                
            }}>
            <Tab1.Screen name="BottomStackHome" component={BottomStackHome} options={{
                 tabBarLabel: ({ focused }) => (
                    <Text style={{ fontSize: 15, color: 'black', fontWeight:'bold' }}>
                      Home
                    </Text>
                  ),
                labelStyle: '50',
                fontSize: 20,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={35} />
                ),
            }} />
            <Tab1.Screen name="BottomStackProfile" component={BottomStackProfile} options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{ fontSize: 15, color: 'black', fontWeight:"bold" }}>
                      Profile
                    </Text>
                  ),
                labelStyle: 'bold',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={35} />
                ),
            }} />
        </Tab1.Navigator>
    )
}
export default BottomStack;