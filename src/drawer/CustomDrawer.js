import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomDrawer = ({navigation}) => {

  const [isPressed, setIsPressed] = useState(false);
  const [visible, setVisible] = useState(true);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  



  function dashboard() {
        navigation.navigate('Dashboard');
  }
  function patients() {
        navigation.navigate('Patients');
  }
  function feesReport () {
        navigation.navigate('Fees_Report');
  }

  function logout() {
        navigation.navigate('Login');
  }

  return (
    <View>
      <View style = {styles.top_cont}>
        <Image 
        style = {styles.img}
        source={require('./logo.png')} />
        <Text style = {[styles.top_text, {fontWeight: "800"}]}>YourCloset</Text>
        <Text style = {styles.top_text}>support@YourClosetApp.com</Text>
      </View>

    
      <View style = {styles.closet}>
      <TouchableOpacity 
      style = {styles.btn}
      onPress={dashboard}
      >
        <Text style = {styles.btntext}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      onPress={patients}
      >
        <Text style = {styles.btntext}>Patients</Text>
      </TouchableOpacity>

        <View>
          {visible == true ? <TouchableOpacity 
            style = {styles.btn}
          onPress={feesReport}
          >
            <View style = {styles.icons}>
            <Text style = {styles.btntext}>Fees Report</Text>
            </View>
          </TouchableOpacity> 
          : ''}
        </View>

      </View>



      <TouchableOpacity 
      style = {styles.btn2}
      onPress={logout}
      >
        <Text style = {styles.btntext2}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({

  top_cont:{
    width: "100%",
    height: "40%",
    backgroundColor: "#1b75f0",
  },

  top_text:{
    marginLeft: 30,
    marginTop: 1,
    fontSize: 18,
    color: "white"
  },

  icons:{
    flexDirection: 'row',
  },

  img:{
    width: 70,
    height: 70,
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 20,
    borderRadius: 8
  },

  closet:{
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    paddingBottom: 20
  },

  btn:{
    alignSelf: "center",
    marginTop: 10,
    width: "100%",
  },

  btntext:{
    fontSize: 20,
    padding:5,
    marginLeft: 30
  },

  btn2:{
    alignSelf: "center",
    marginTop: 10,
    width: 150,
    alignItems: "center",
    backgroundColor: "#1b75f0",
    padding: 3,
    borderRadius: 8
    
  },

  btntext2:{
    fontSize: 20,
    padding:5,
    color: "white"
  },

  itemPressed: {
    backgroundColor: '#1b75f0',
    color: "white"
  },


})