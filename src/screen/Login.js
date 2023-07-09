import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation}) => {
  useEffect(() => {
    getdata();
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })
    return unsubscribe
  },[navigation])

  const getdata = async () => {
    try {
      let flag = await AsyncStorage.getItem('key');
      if(flag != null)
      {
        console.log(flag)
        navigation.navigate('Home');
      }
    } catch (error) {
      
    }
  }

  // const [isShowingText, setIsShowingText] = useState(true);
  const [name, setname] = useState('');
  const [pass, setpass] = useState();

  const login = async () => {
    if (name == 'Admin' && pass == "123456") {
      try {
        await AsyncStorage.setItem('key', 'admin');
        console.log('run')
        navigation.navigate('Home');
      } catch (e) {
        
      }
    }
    else if (name == 'Himanshu' && pass == "123456")
    {
      try {
        await AsyncStorage.setItem('key', 'staff');
        console.log('run')
        navigation.navigate('Home');
      } catch (e) {
        
      }
    } else{
      console.log('try again')
    }
  }

  function singup() {
        navigation.navigate('Signup');
  }


  return (
    <View style = {styles.container}>
      <Image 
      style = {styles.logo}
      source={require('./logo.jpg')} />
       <TextInput
          style = {styles.inputs}
          placeholder="Your Name"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={name}
          onChangeText={text => setname(text)}
        />
       <TextInput
          style = {styles.inputs}
          placeholder="Password"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={pass}
          onChangeText={text => setpass(text)}
        />

        <TouchableOpacity
        onPress={login}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Login</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={singup}
        style = {styles.btn2} 
        >
          <Text style = {styles.btntext2} >Create an account</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  container:{
    backgroundColor: "white",
    height: "100%"

  },
  logo:{
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 30
  },

 inputs:{
   fontSize: 20,
   height: 50,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black',
   paddingLeft: 10,
   backgroundColor: "#E2E2E2",
   color: 'black'
  },

  btn:{
    width: 150,
    marginTop: 50,
    alignSelf: "center",
    backgroundColor: "#1b75f0",
    borderRadius: 12,
  },

  btntext:{
    fontSize: 25,
    alignSelf: "center",
    color: "white",
    padding: 6
  },

  btn2:{
    width: 200,
    alignSelf: "center",
    marginTop: 8
  },

  btntext2:{
    color: "#1b75f0",
    fontSize: 20,
    alignSelf: "center"
  }
 });