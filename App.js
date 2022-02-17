import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';

const Stack = createStackNavigator();

export default function App(){
   return(
     <NavigationContainer>
<Stack.Navigator>
 
  <Stack.Screen name = "Screen1" component = {Screen1} options = {{headerShown: false}}/>
  <Stack.Screen name = "Screen2" component = {Screen2} options = {{headerShown: false}}/>
  

</Stack.Navigator>

     </NavigationContainer>

   );

   }
