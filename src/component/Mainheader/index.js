import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Mainheader = ({ navigation, props }) => {

    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <View style={{ alignItems: "flex-start" }}>
                        <MaterialCommunityIcons name="menu" color="white" size={30}>
                        </MaterialCommunityIcons>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:'30%'}}>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{props}</Text>
            </View>
            </View>
        </View>
    )
}
export default Mainheader;