import { View, Text , StyleSheet, Image} from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    useEffect(() => {
        getdata();
    })

    const getdata = async () => {
      try {
        let flag = await AsyncStorage.getItem('key');
        console.log(flag)
        if(flag != null)
        {
          navigation.navigate('Home');
          return true
        }
        else{
          setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
        }
      } catch (error) {
        setTimeout(() => {
          navigation.navigate('Login');
      }, 2000);
      }
      setTimeout(() => {
        navigation.navigate('Login');
    }, 2000);
    }
  return (
    <View style = {styles.container}>
      <Image 
      style = {styles.logo}
      source={require('./logo.jpg')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        height: "100%"
    },
    logo:{
        alignSelf: "center",
        marginTop: 280,
        height: 200,
        width: 200

    }
})