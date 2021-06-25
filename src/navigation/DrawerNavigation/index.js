import React from 'react';
import { } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomStack from '../BottomStack/index'
import DrawerBg from '../../component/DrawerBg'
import Privacy_Policy from '../../screens/Privacy_Policy';
import Contact_us from '../../screens/Contact_us';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerBg}>
            <Drawer.Screen name='BottomStack' options={{ drawerLabel: 'First page Option' }}
                component={BottomStack} />
                <Drawer.Screen name='Privacy_Policy'  component={Privacy_Policy} />
                <Drawer.Screen name='Contact_us'  component={Contact_us} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;