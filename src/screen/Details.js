import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = () => {
    useEffect(() => {
        getdata()
        apicall()
    },[])

    const [username, setUsername] = useState('himanshu')

    const apicall = () => 
    {
        console.log(username);
    fetch('https://gottagging.000webhostapp.com/api/fetchappointment.php', {
        method: 'POST',
        headers: {
            "Content-type": "application/json;"
        },
        body: JSON.stringify({
            username : username
        }),
        })
        .then(response => response.json())
        .then(json => {
            let res = (json[0])
        })
    }


    const getdata = async () => {
        try {
          let flag = await AsyncStorage.getItem('username');
          if(flag != null)
          {
            console.log(flag);
            setUsername(flag);
          }
        } catch (error) {
          
        }
      }


  return (
    <View>
      <Text style={{color: 'black'}}>Details</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})