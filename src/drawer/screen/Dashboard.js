import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Image } from 'react-native';


const Dashboard = () => {
  return (
    <View style={styles.appbg}>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/patientwating.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Patients Waiting | </Text>
        <Text style={{marginTop: 25, fontSize: 15}}>Today</Text>
        </View>
        <Text style = {{fontSize: 35, marginBottom: 10}}>145</Text>
      </View>
      </View>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/appoiltment.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Appointments | </Text>
        <Text style={{marginTop: 25, fontSize: 15}}>Today</Text>
        </View>
        <Text style = {{fontSize: 35, marginBottom: 10}}>145</Text>
      </View>
      </View>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/total.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Total Patients | </Text>
        <Text style={{marginTop: 25, fontSize: 15}}>Today</Text>
        </View>
        <Text style = {{fontSize: 35, marginBottom: 10}}>145</Text>
      </View>
      </View>


    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    appbg:{
        height: '100%',
        width: '100%',
        // backgroundColor: '#fff'
    },
    conta:{
      marginHorizontal: 18,
      backgroundColor: 'white',
      height: 120,
      width: "92%",
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 25,
      alignItems: 'flex-start',
      elevation: 5,
    },
    contatxt:{
      fontSize: 20,
      marginTop: 20,
      color: "black"
    },
    contaimg:{
      height: 80,
      width: 80,
      marginHorizontal: 20,
      marginVertical: 20
      
    },
  
  });
  
  