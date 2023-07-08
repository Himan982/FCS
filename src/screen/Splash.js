import { View, Text , StyleSheet, Image} from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    })
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