import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dashboard = () => {


  const [check, setChack] = useState(false);
  const navigation = useNavigation()
  const route = useRoute();

  useEffect(() => {
    getdata();
    console.log(check)
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      return true
    })
    // console.log(unsubscribe)
    return unsubscribe
  },[navigation])


  const getdata = async () => {
    try {
      let flag = await AsyncStorage.getItem('key');
      if(flag != '')
      {
        console.log(flag)
        setChack(true);
        // navigation.navigate('Home');
      }
      else if(flag == null)
      {
        console.log(flag)
        setChack(false);
        // navigation.navigate('Home');
      }
    } catch (error) {
      setChack(false);
    }
  }

  return (
    <View style={styles.appbg}>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/patientwating.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Patients Waiting | </Text>
        <Text style={styles.sidetxt}>Today</Text>
        </View>
        <Text style = {styles.numbertxt}>145</Text>
      </View>
      </View>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/appoiltment.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Appointments | </Text>
        <Text style={styles.sidetxt}>Today</Text>
        </View>
        <Text style = {styles.numbertxt}>145</Text>
      </View>
      </View>
        
      <View style = {styles.conta}>
      <Image style={styles.contaimg} source={require('./img/total.png')}/>
      <View style={{justifyContent: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        <Text style={styles.contatxt}>Total Patients | </Text>
        <Text style={styles.sidetxt}>Today</Text>
        </View>
        <Text style = {styles.numbertxt}>145</Text>
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
    sidetxt:{
      color: 'gray',
      marginTop: 25,
      fontSize: 15
    },
    numbertxt:{
      fontSize: 35, 
      marginBottom: 10,
      color: 'gray',
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
  
  