import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Patientinfo = (props) => {
    useEffect(() => {
        setName(props.route.params.name);
        setPhone(props.route.params.mobilenum);
        setUsername(props.route.params.username)
        console.log(username)
        // apicall();
    });

    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [username, setUsername] = useState()
    const [patient, setPatient] = useState()



  return (
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
      <Text style = {styles.toptxt}>Patient Information</Text>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Patient Name</Text>
            <Text style = {styles.txt}>: {props.route.params.pname}</Text>
        </View>
        

        <View style = {styles.table}>
            <Text style = {styles.lable}>Country</Text>
            <Text style = {styles.txt}>: {props.route.params.country}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>State</Text>
            <Text style = {styles.txt}>: {props.route.params.state}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>City</Text>
            <Text style = {styles.txt}>: {props.route.params.city}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Address</Text>
            <Text style = {[styles.txt,{height: 80}]}>: {props.route.params.address}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Pincode</Text>
            <Text style = {styles.txt}>: {props.route.params.pincode}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Mobile Number</Text>
            <Text style = {styles.txt}>: {props.route.params.mobilenum}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Alternate No</Text>
            <Text style = {styles.txt}>: {props.route.params.alternatemobilenum}</Text>
        </View>

        <View style = {styles.table}>
            <Text style = {styles.lable}>Category</Text>
            <Text style = {styles.txt}>: {props.route.params.ptype}</Text>
        </View>

        <View>

            <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Addvisit' ,{pid : props.route.params.pid ,pname: props.route.params.pname ,mobilenum: props.route.params.mobilenum, address: props.route.params.address, username: props.route.params.username})
            }}
            style = {styles.btn} 
            >
            <Text style = {styles.btntext} >Add Visit</Text>

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Addappointment' ,{pid : props.route.params.pid ,pname: props.route.params.pname ,mobilenum: props.route.params.mobilenum, address: props.route.params.address, username: props.route.params.username})
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
        height: 30,
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