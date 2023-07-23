import { Image, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';



const Addappointment = (props) => {

  const [date , setDate] = useState("YYYY-MM-dd");
  const [datepicker , setDatepicker] = useState(false);

  const showDatepicker = () => {
    setDatepicker(true);
  }
  const hideDatepicker = () => {
    setDatepicker(false);
  }

  const handlConfirm = (date) => {
    var result = JSON.stringify(date)
    var dt = result.substring(1, 11)
    setDate(dt)
    hideDatepicker();
  }

  const addappointment = () => {
    fetch('https://gottagging.000webhostapp.com/api/addappointment.php', {
          method: 'POST',
          headers: {
            "Content-type": "application/json;"
          },
          body: JSON.stringify({
            pid: props.route.params.pid,
            username: props.route.params.username,
            pname: props.route.params.pname,
            date : date,
            pcontactno: props.route.params.mobilenum,
            paddress: props.route.params.address,
            time: "0"
          }),
          })
          .then(response => response.json())
          .then(json => {
            let result = json.status;          
            if(result == "true")
            {
              console.log(result)
              ToastAndroid.show('Appointment is added successfully', ToastAndroid.SHORT)
            }
            else{
              ToastAndroid.show("Appointment not added" , ToastAndroid.SHORT)
    
            }
          })
    // console.log(props.route.params.pname)
  }

  return (
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
    <Text style = {styles.toptxt}>Addappointment</Text>

    <Text style = {styles.lable}>Addappointment Date</Text>
    <TouchableOpacity
      onPress={showDatepicker} 
      style={styles.datest}>
            <TextInput
          style = {[styles.inputs,{width:310, paddingHorizontal: 50}]}
          placeholder="YYYY-MM-dd"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={date}
          onChangeText={text => setDate(text)}
          />
      {date != "YYYY-MM-dd" && '' ? '' :  <Image style={styles.icon} source={require('./date.png')} />}

      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={datepicker}
        mode="date"
        onConfirm={handlConfirm}
        onCancel={hideDatepicker}
      />      

      <TouchableOpacity 
        style = {styles.btn2}
        onPress={addappointment}
        >
            <Text style = {styles.btntext2}>Save</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Addappointment

const styles = StyleSheet.create({
  cont:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lable:{
    fontSize: 20,
    marginHorizontal: 15,
    fontWeight: '500',
    color: "black",
    marginTop: 40,
},
  toptxt:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15
},
datest:{
  flexDirection: 'row',
  width: "100%"
},

datetext:{
  fontSize: 25,
  color: "black",
  paddingHorizontal: 10,
  textAlign: 'left',
  color: 'black'
},
icon:{
  width:25,
  height:25,
  right:45,
  marginTop: 20,
  marginRight: 10
},
inputs:{
  fontSize: 20,
  height: 50,
  marginTop: 10,
  marginHorizontal: 15,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: 'black',
  paddingLeft: 10,
  backgroundColor: "#E2E2E2",
  paddingRight: 10,
  color: 'black'
 },
 btn2:{
  alignSelf: "center",
  marginTop: 10,
  width: 100,
  alignItems: "center",
  backgroundColor: "#1b75f0",
  padding: 3,
  borderRadius: 8,
  justifyContent: 'center',
  marginBottom: 50,
  paddingHorizontal: 10
  
},

btntext2:{
  fontSize: 20,
  color: "white"
},
})