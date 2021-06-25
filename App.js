import React from 'react';
import MainStack from './src/navigation/Stacknavigation'
import { NavigationContainer } from '@react-navigation/native';
const App =()=>{
  return(
   <NavigationContainer>
     <MainStack></MainStack>
   </NavigationContainer>
  )
}
export default App;