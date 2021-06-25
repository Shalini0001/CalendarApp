import React, { useState, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FloatingAction } from "react-native-floating-action";
import Mainheader from '../../component/Mainheader';


const Calendar = ({navigation , props}) => {
    // const [date, setDate] = useState('')
    const actions = [
        {
            text: "Add event",
            icon: <MaterialCommunityIcons name="plus" color="white" size={30}>
            </MaterialCommunityIcons>,
            name: "bt_addevent",
            position: 1,
        },
        // {
        //   text: "Edit event",
        //   icon: <MaterialCommunityIcons name="minus" color="white" size={30}>
        //   </MaterialCommunityIcons>,
        //   name: "bt_editevent",
        //   position: 2
        // },
    ];


    return (
        <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>
            <Mainheader props='Calendar' navigation={navigation}></Mainheader>
            {/* <View style={{ alignContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={{ alignItems: "flex-start" }}>
                        <MaterialCommunityIcons name="menu" color="white" size={30}>
                        </MaterialCommunityIcons>
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: '30%' }}>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Calendar</Text>
                </View>
            </View> */}
            <View style={{ marginTop: '5%' }}>
                <CalendarPicker
                //   onDateChange={this.onDateChange}
                />
            </View>
            
                <FloatingAction
                    actions={actions}
                    onPressItem={name => {
                        navigation.navigate('Add_Event')
                    
                        console.log(`selected button: ${name}`);
                    }}
                />
        </View>
    )
}
export default Calendar;
