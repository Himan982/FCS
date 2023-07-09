import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const Add_Patient = () => {
    const [name, setName] = useState()
    const [country, setCountry] = useState('Country')
    const [states, setState] = useState('States')
    const [city, setCity] = useState('City')
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [number, setNumber] = useState()
    const [alternateNumber, setAlternateNumber] = useState()
    const [category, setCategory] = useState('New')
    const [selected, setSelected] = useState()
    const [dropdowndata, setDropdowndata] = useState([
      {data: ['India', 'USA', 'China'], isSelect: false},
      {data: ['Madhya Pradesh', 'Bihar', 'Mumbai'], isSelect: false},
      {data: ['Indore', 'Bhopal', 'Ahemdabad'], isSelect: false}])

      const select = index => {
        let tempdata=dropdowndata;
        tempdata.map((item, ind) => {
          if(index == ind)
          {
            item.isSelect =! item.isSelect;
            setSelected(ind)
          }
          else
          {
            item.isSelect = false;
          }
        });

        let temp = [];
        tempdata.map(item => {
          temp.push(item)
        })
        setDropdowndata(temp);
      }





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
      <View style= {{marginTop: 20}}></View>
      <FlatList
        data={dropdowndata}
        style={{color: 'black', flexDirection: 'row'}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity 
            style={styles.dropdowncard}
            onPress={() => {
              select(index);
            }}
            >
              <View style={{flexDirection: 'row'}}>
                <View>
                {index == 0 ? <Text style={styles.dropdownheading}>{country} </Text>
                : index == 1 ? <Text style={styles.dropdownheading}>{states} </Text>
                : index == 2 ? <Text style={styles.dropdownheading}>{city} </Text>
                : ''}</View>
                {item.isSelect ? ( <Image style={styles.dropdownicon} source={require('./up.png')} />) 
                : ( <Image style={styles.dropdownicon} source={require('./down.png')} />)}
               
              </View>
              {item.isSelect && (              
              <FlatList
              data={item.data}
              renderItem={({item, index}) => {
                return(
                <View style={styles.dropdownlist}>
                  <TouchableOpacity
                  onPress={() => {
                    if(selected == 0)
                    {
                      setCountry(item)
                      console.log(country)
                    }
                    else if(selected == 1)
                    {
                      setState(item)
                    }
                    else if(selected == 2)
                    {
                      setCity(item)
                    }
                  }}>
                  <Text style={styles.dropdownlisttxt}>{item}</Text>
                  </TouchableOpacity>
                </View>
                )
              }}
              />)}

            </TouchableOpacity>
          );
        }}
      />

      <Text style = {styles.lable}>Address</Text>
      <TextInput
        style = {[styles.inputs,{height: 100}]}
        multiline={true}
        numberOfLines={4} // optional, to set the initial number of lines visible
        onChangeText={text => setAddress(text)}
        value={address}
        placeholder='Address'
        autoCorrect={false}
        maxLength={30}
        autoCapitalized="words"
        placeholderTextColor="#777"
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
    dropdowncard:{
      width: 360,
      backgroundColor: '#E2E2E2',
      marginHorizontal: 15,
      elevation: 5,
      borderRadius:10,
      marginBottom: 25,
      borderWidth: 1
    },
   dropdownheading:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: 6,
      paddingVertical: 10,
   },
    dropdownlist:{
      paddingLeft: 20,
      borderBottomWidth: 1,

    },
    dropdownlisttxt:{
      paddingHorizontal: 20,
      color: 'black',
      paddingVertical: 5,
      marginVertical: 2,
      // backgroundColor: 'blue',
     
      fontSize: 18
    },
    dropdownicon: {
      height: 24,
      width: 24,
      right: 20,
      position: 'absolute',
      bottom: 10
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
        color: 'black'
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