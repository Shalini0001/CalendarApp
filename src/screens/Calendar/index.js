import React, { useState, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FloatingAction } from "react-native-floating-action";


const Calendar = () => {
    const [date, setDate] = useState('')
    const actions = [
        {
            text: "Add event",
            icon: require("../../assets/addevent.png"),
            name: "bt_addevent",
            position: 1
        },
        // {
        //   text: "Update",
        //   icon: require("../../assets/addevent.png"),
        //   name: "bt_update",
        //   position: 2
        // },
    ];


    return (
        <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>
            
            <View style={{ alignContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={{ alignItems: "flex-start" }}>
                        <MaterialCommunityIcons name="menu" color="white" size={30}>
                        </MaterialCommunityIcons>
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: '30%' }}>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Calendar</Text>
                </View>
            </View>
            <View style={{ marginTop: '10%' }}>
                <CalendarPicker
                //   onDateChange={this.onDateChange}
                />
            </View>
            
                <FloatingAction
                    actions={actions}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />
        
        </View>
    )
}
export default Calendar;


//     // onDateChange(date) {
//     //     this.setState({
//     //         selectedStartDate: date,
//     //     });
//     // }


//     render() {
//         const { selectedStartDate } = this.state;
//         const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//         return (
//             <View style={{ backgroundColor: '#52BE80', height: '100%', width: '100%' }}>
//                 <View style={{ alignContent:'center', flexDirection:'row'}}>
//                 <TouchableOpacity>
//                     <View style={{alignItems:"flex-start"}}>
//                         <MaterialCommunityIcons name="menu" color="white" size={30}>
//                         </MaterialCommunityIcons>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={{marginLeft:'30%'}}>
//                     <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Calendar</Text>
//                 </View>
//                 </View>
//                 <View style={{marginTop:'10%'}}>
//                 <CalendarPicker
//                     // onDateChange={this.onDateChange}

//                 />
// </View>
//                 <View style={{marginTop:"10%"}}>
//                     <Text style={{color:'white', fontSize:20}}>SELECTED DATE:{startDate}</Text>
//                 </View>
//             </View>
//         );
//     }
// }

// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#FFFFFF',
// //       marginTop: 100,
// //     },
// //   });