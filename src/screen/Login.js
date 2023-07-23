import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {
  useEffect(() => {
    getdata();
  });

  const getdata = async () => {
    try {
      let flag = await AsyncStorage.getItem('usertype');
      if(flag != null)
      {
        console.log(flag)
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  // const [isShowingText, setIsShowingText] = useState(true);
  const [email, setemail] = useState('');
  const [pass, setpass] = useState();
  const [username, setUsername] = useState();
  const [usertype, setUsertype] = useState();
  
  const login = () => {
      apicall();
    }

    const apicall = () => {
      console.log("call")
      fetch('https://gottagging.000webhostapp.com/api/login.php', {
        method: 'POST',
        headers: {
          "Content-type": "application/json;"
        },
        body: JSON.stringify({
          email : email,
          password : pass
        }),
        })
        .then(response => response.json())
        .then(json => {
          let result = json.status;
          let utype = json.usertype;
          let uname = json.username;

          console.log(uname + " " + utype)
          // let count = 0;
          
          console.log("login");
          console.log(result)
          if(result == "True")
          {
            props.navigation.navigate('Home' ,{usertype: utype , username: uname});

            // setUsertype(utype);
            // setUsername(uname);
            // console.log(utype);
            // console.log(uname);


            // const firstPair = ["username", uname]
            // const secondPair = ["usertype", utype]
            // console.log(firstPair+" "+secondPair);
            // setData();
          }
          else{
            console.log("User is not created")
  
          }
        })
    }


  function singup() {
        props.navigation.navigate('Signup');
  }


  return (
    <View style = {styles.container}>
      <Image 
      style = {styles.logo}
      source={require('./logo.jpeg')} />
       <TextInput
          style = {styles.inputs}
          placeholder="Your email"
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
    height: 180,
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