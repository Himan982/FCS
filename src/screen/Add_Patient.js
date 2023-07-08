import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Add_Patient = () => {
    const [name, setName] = useState()
    const [country, setCountry] = useState()
    const [states, setState] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [number, setNumber] = useState()
    const [alternateNumber, setAlternateNumber] = useState()
    const [category, setCategory] = useState('New')
    const [selected, setSelected] = useState(1)


    const save = () => {
        console.log("running")
    }
  return (


  <>
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
      <Text style = {styles.toptxt}>Add Patient</Text>



      <View style = {styles.cont}>



      <ScrollView contentContainer Style={styles.container}>


<Text style = {styles.lable}>Patient Name</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Patient Name"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={name}
          onChangeText={text => setName(text)}
      />

      <Text style = {styles.lable}>Country</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Country"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={country}
          onChangeText={text => setCountry(text)}
      />


      <Text style = {styles.lable}>State</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="State"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={states}
          onChangeText={text => setState(text)}
      />



      <Text style = {styles.lable}>City</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="City"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={city}
          onChangeText={text => setCity(text)}
      />


      <Text style = {styles.lable}>Address</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Address"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={address}
          onChangeText={text => setAddress(text)}
      />

  
      <Text style = {styles.lable}>Pincode</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Pincode"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={pincode}
          onChangeText={text => setPincode(text)}
      />


  
      <Text style = {styles.lable}>Mobile Number</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Mobile Number"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={number}
          onChangeText={text => setNumber(text)}
      />

  
      <Text style = {styles.lable}>Alternate Mobile Number</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Alternate Mobile Number"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={alternateNumber}
          onChangeText={text => setAlternateNumber(text)}
      />

    <View style={styles.main}>
      <TouchableOpacity 
              onPress={() => {
                setSelected(1);
                setCategory('New');
              }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selected == 1 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>New</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={[styles.main,{marginBottom: 25}]}>
      <TouchableOpacity 
      onPress={() => {
        setSelected(2);
        setCategory('Old');
      }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selected == 2 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Old</Text>
        </View>
      </TouchableOpacity>
    </View>

      

</ScrollView>

      </View>


      <TouchableOpacity 
        style = {styles.btn2}
        onPress={save}
        >
            <Text style = {styles.btntext2}>Save</Text>
     </TouchableOpacity>

    </View>
  </>
  )
}

export default Add_Patient

const styles = StyleSheet.create({
    cont:{
        height: "85%",
        width: "100%",
    },
    toptxt:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'  
    },
    lable:{
        fontSize: 20,
        marginHorizontal: 15,
        fontWeight: '500',
        color: "black",
        marginTop: 5
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
    container:{
        width: "100%",
        height: 100,
        elevation: 5,
        paddingVertical: 15
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
      main:{
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 5,
        marginHorizontal: 10,
        justifyContent: 'center'
      },
      radio:{
        height: 20,
        width: 20,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        margin: 5
      },
      radiotxt:{
        fontSize: 20,
        color: "black"
      },
      radioraper:{
        flexDirection: 'row'
      },
      radiobg:{
        backgroundColor: 'black',
        height: 14,
        width: 14,
        borderRadius: 10,
        margin: 1
      }
})