import React from 'react'
import { View, Text, ImageBackground, Image, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Privacy_Policy from '../../screens/Privacy_Policy';

const DrawerBg = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{backgroundColor:"blue"}}
                style={{ height: '100%', width: '100%' }}>
                <TouchableOpacity onPress={()=> Linking.openURL('http://65.0.93.145/bluff/public/privacy')}>
                    <View>
                        <Text style={{ color: "black", fontSize:20, fontWeight:'bold' }}>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Contact_us')}>
                    <View>     
                        <Text style={{ color: "black",  fontSize:20, fontWeight:'bold'  }}>Contact us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <View>
                        <Text style={{ color: "black",  fontSize:20, fontWeight:'bold'  }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
export default DrawerBg;