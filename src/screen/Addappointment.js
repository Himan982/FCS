import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';



const Addappointment = () => {
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

  return (
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
    <Text style = {styles.toptxt}>Addappointment</Text>

    <Text style = {styles.lable}>Addappointment Date</Text>
    <TouchableOpacity
      onPress={showDatepicker} 
      style={styles.datest}>
            <TextInput
          style = {[styles.inputs,{width:360}]}
          placeholder="Treatment Suggested"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={date}
          onChangeText={text => setDate(text)}
          />
      {date != "YYYY-MM-dd" ? '' :  <Image style={styles.icon} source={require('./date.png')} />}

      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={datepicker}
        mode="date"
        onConfirm={handlConfirm}
        onCancel={hideDatepicker}
      />
      
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
    marginTop: 40
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
  textAlign: 'left'
},
icon:{
  width:25,
  height:25,
  right:45,
  marginTop: 20
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
 },
})