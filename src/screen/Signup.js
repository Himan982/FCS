import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Singup = ({navigation}) => {

const [name, setname] = useState('');
const [email, setemail] = useState();
const [pass, setpass] = useState();


    function login() {
        navigation.navigate('Login');
  }

  function signup() {
        navigation.navigate('Login');
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
          placeholder="email"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={email}
          onChangeText={text => setemail(text)}
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
        onPress={signup}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Sign up</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={login}
        style = {styles.btn2} 
        >
          <Text style = {styles.btntext2} >Already have an account</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Singup

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
  paddingLeft: 10,
  backgroundColor: "#E2E2E2",
   fontSize: 20,
   height: 50,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black',
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
    width: 250,
    alignSelf: "center",
    marginTop: 8
  },

  btntext2:{
    color: "#1b75f0",
    fontSize: 20,
    alignSelf: "center"
  }
 });