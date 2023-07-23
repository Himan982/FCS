import { FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Patients = (props) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [OldData, setOldData] = useState([]);
  const [visible, setVisible] = useState(false);
  const searchRef = useRef();
  const [username, setUsername] = useState()

  useEffect(() => {
    get();
    getData();
}, []);

const get = async () => {
    try {
      let flag = await AsyncStorage.getItem('username');
      console.log(flag)
      setUsername(flag)
    } catch (error) {
      console.log(error)
    }
  }

const getData = () => {
    setLoading(true);
    fetch('https://gottagging.000webhostapp.com/api/fetchallpatients.php', {
        method: 'POST',
        headers: {
            "Content-type": "application/json;"
        },
        body: JSON.stringify({
            username : "himanshu"
        }),
        })
        .then(response => response.json())
        .then(json => {
            setProducts(json);
            setOldData(json)
            setLoading(false)
        })
}

const it = (pid, pname, mobilenum, address, city, state, pincode, ptype, username, alternatemobilenum, country) =>{
    props.navigation.navigate('Patientinfo' ,{pid : pid ,pname: pname ,mobilenum: mobilenum, address: address, city: city, state: state, pincode: pincode, ptype: ptype ,username: username, alternatemobilenum: alternatemobilenum, country: country})
}

const onSearch=(text) => {
 
    if(text == '') {
        setProducts(OldData);
        setVisible(false)
    }else{
        tempList = products.filter(item => {
            setVisible(false)
            return item.pname.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        if(tempList.length == 0){
            setVisible(true)
        }
        setProducts(tempList);
    }
};

return (
  <View style = {styles.container}>
      <View style={styles.searchbarcom}>
          <Image style={styles.searchicon} 
          source={require('./img/search.png')} 
          />
          <TextInput 
          ref={searchRef}
          value={search}
          placeholder='Search Patient'
          style={styles.searchbar}
          onChangeText={txt => {
            setSearch(txt);
            onSearch(txt);
          }}/>
          {search == '' ? null : (
              <TouchableOpacity 
              style={{marginRight: 15}}
              onPress={() => {
                  searchRef.current.clear();
                  setProducts(OldData)
                  setSearch('');
              }}>

              <Image
              source={require('./img/close.png')}
              style = {styles.closeicon}
              />

              </TouchableOpacity>
          )}    
      </View>

      <View>
        {
            products.length == 0 ? <TouchableOpacity 
            style = {styles.btn2}
            onPress={() => {
                props.navigation.navigate('Add_Patient');
            }}
            >
              <Text style = {styles.btntext2}>Add New Patient</Text>
            </TouchableOpacity> : ''
        }
      </View>

      <View style = {{width: "100%", height: 15}}>

      </View>

      <RefreshControl 
      refreshing={loading}
      onRefresh={() => {
          getData();
      }}>
          <FlatList 
          data={products}
          renderItem={({item, index}) => {
              return <TouchableOpacity
              onPress={() => {
                  it(item.pid, item.pname, item.mobilenum, item.address, item.city, item.state, item.pincode, item.ptype, item.username, item.alternatemobilenum, item.country);
              }}>
                      <View style={styles.itemView}>
                          <View style = {{marginLeft: 10}}>
                              <Text style = {styles.nametxt}>{item.pname.length > 30
                              ? item.pname.substring(0, 30) + '...'
                              : item.pname}</Text>
                              <Text style={styles.price} >{item.mobilenum}</Text>
                          </View>
                      </View>
              </TouchableOpacity>
          }} 
          />
      </RefreshControl>
  </View>
)
}

export default Patients

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  itemView:{
      width: '90%',
      height: 60,
      backgroundColor: '#fff',
      alignSelf: 'center',
      marginTop: 10,
      flexDirection: 'row',
      elevation: 5,
      borderRadius: 10,
      alignItems: 'center'
  },
  nametxt:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  price:{
      fontSize: 15,
      marginTop: 2,
      color: 'black'
  },
  searchbar:{
      width: '90%',
      height: 50,
      backgroundColor: "white",
      fontSize: 17,
      color: 'black'
  },
  searchbarcom:{
      flexDirection: 'row',
      backgroundColor: "white",
      width: "90%",
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      borderRadius: 15,
      paddingHorizontal: 10
  },
  searchicon:{
      width: 20,
      height: 20,
      marginHorizontal: 5,
      marginLeft: 5
  },
  closeicon:{
      width: 20,
      height: 20
  },
  btn2:{
    alignSelf: "center",
    marginTop: 10,
    width: 200,
    alignItems: "center",
    backgroundColor: "#1b75f0",
    padding: 3,
    borderRadius: 8,
    justifyContent: 'center'
    
  },

  btntext2:{
    fontSize: 20,
    color: "white"
  },
})