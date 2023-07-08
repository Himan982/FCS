import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './screen/Dashboard';
import Patients from './screen/Patients';
import Fees_Report from './screen/Fees_Report';
import CustomDrawer from './CustomDrawer';



const Drawer = createDrawerNavigator();

const Drawernav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Patients' component={Patients} />
        <Drawer.Screen name='Fees_Report' component={Fees_Report} />
    </Drawer.Navigator>
  )
}

export default Drawernav