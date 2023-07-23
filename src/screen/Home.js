import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Drawernav from '../drawer/Drawernav'


const Home = (props) => {
  useEffect(() => {
    setData();
    // console.log("test "+ props.route.params.username + " " + props.route.params.username)
  })
  const setData = async () => {
    const firstPair = ["username", props.route.params.username]
    const secondPair = ["usertype", props.route.params.usertype]
    console.log(firstPair+" "+secondPair);
    try {
      await AsyncStorage.multiSet([firstPair, secondPair]);
      console.log('run')
      navigation.navigate('Home');
    } catch (e) {
      
      console.log(e)
    }
  }
  return (
    <View style = {{flex: 1}}>
        <Drawernav />
    </View>
  )
}

export default Home
