import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Patientinfo = (props) => {

    const [name,setName] = useState();
    const [phone,setPhone] = useState();

    useEffect(() => {
        setName(props.route.params.name);
        setPhone(props.route.params.phone);
        
    })

  return (
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
      <Text style = {styles.toptxt}>Patient Information</Text>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Patient Name</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>
        

        <View style = {styles.table}>
            <Text style = {styles.lable}>Country</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>State</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>City</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Address</Text>
            <Text style = {[styles.txt,{height: 100}]}>{name}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Pincode</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Mobile Number</Text>
            <Text style = {styles.txt}>{phone}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Alternate Number</Text>
            <Text style = {styles.txt}>{phone}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Category</Text>
            <Text style = {styles.txt}>{name}</Text>
        </View>

        <View>

            <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Addvisit' ,{name: name, phone: phone})
            }}
            style = {styles.btn} 
            >
            <Text style = {styles.btntext} >Add Visit</Text>

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Addappointment' ,{name: name, phone: phone})
            }}
            style = {styles.btn} 
            >
            <Text style = {styles.btntext} >Add Appointment</Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

export default Patientinfo

const styles = StyleSheet.create({
    toptxt:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
    table:{
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
    
    },
    lable:{
        fontSize: 16,
        fontWeight: '500',
        color: "black",
        marginTop: 5,
        paddingHorizontal: 10,
        width: 140,
        borderBottomWidth: 1
    },
    txt:{
        fontSize: 17,
        color: "black",
        marginTop: 5,
        paddingHorizontal: 10,
        height: 50,
        width: 210,
        borderBottomWidth: 1,
        paddingBottom: 2
    },
    btn:{
        width: 240,
        marginTop: 10,
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
    
})