import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screen/Splash';
import Signup from './screen/Signup';
import Login from './screen/Login';
import Home from './screen/Home';
import Add_Patient from './screen/Add_Patient';
import Patientinfo from './screen/Patientinfo';
import Addvisit from './screen/Addvisit';
import Addappointment from './screen/Addappointment';
import Dashboard from './drawer/screen/Dashboard';
import Details from './screen/Details';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Add_Patient' component={Add_Patient} options={{headerShown: false}}/>
            <Stack.Screen name='Patientinfo' component={Patientinfo} options={{headerShown: false}}/>
            <Stack.Screen name='Addvisit' component={Addvisit} options={{headerShown: false}}/>
            <Stack.Screen name='Addappointment' component={Addappointment} options={{headerShown: false}}/>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}/>
            <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav