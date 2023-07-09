import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Addvisit = () => {

    const [fee, setFee] = useState()
    const [country, setCountry] = useState()
    const [diagnosis, setDiagnosis] = useState()
    const [history, setHistory] = useState()
    const [category, setCategory] = useState('New')
    const [selected, setSelected] = useState(1)
    const [categorypay, setCategorypay] = useState('Cash')
    const [selectedpay, setSelectedpay] = useState(1)
    const [cameraphoto, setCameraphoto] = useState('');
    const [cameraphotoname, setCameraphotoname] = useState('photo not selected');
    const [date , setDate] = useState("YYYY-MM-dd");
    const [datepicker , setDatepicker] = useState(false);
    const [treatment , setTreatment] = useState();
  
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


    const save = () => {
        console.log("running")
    }


    const opencamera =  () => {
      let options = {
        storageOptions:{
          path:"image"
        }
      }

        launchCamera(options, response => {
          setCameraphoto(response.assets[0].uri)
          setCameraphotoname(response.assets[0].fileName)
        })
    }
    
    const opengallery = () => {
        
        let options = {
            storageOptions:{
                path:"image"
            }
        }
        
        launchImageLibrary(options,response => {
            setCameraphoto(response.assets[0].uri)
            setCameraphotoname(response.assets[0].fileName)
        })
      }
    

  return (
    <>
    <View style = {{paddingVertical: 5, paddingHorizontal: 10}}>
      <Text style = {styles.toptxt}>Add Visit</Text>



      <View style = {styles.cont}>



      <ScrollView contentContainer Style={styles.container}>


<Text style = {styles.lable}>Visit Date</Text>
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


{/* --------------------------------------------------------------------- */}

<Text style = {styles.lable}>Patient Category</Text>
<View style={styles.main}>
      <TouchableOpacity 
              onPress={() => {
                setSelected(1);
                setCategory('Paid Visit');
              }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selected == 1 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Paid Visit</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.main}>
      <TouchableOpacity 
      onPress={() => {
        setSelected(2);
        setCategory('Follow Up');
      }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selected == 2 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Follow Up</Text>
        </View>
      </TouchableOpacity>
    </View>


    <View style={styles.main}>
      <TouchableOpacity 
      onPress={() => {
        setSelected(3);
        setCategory('FOC');
      }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selected == 3 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>FOC</Text>
        </View>
      </TouchableOpacity>
    </View>

{/* --------------------------------------------------------------------- */}



      <Text style = {styles.lable}>Fee Collected</Text>
      <TextInput
          style = {styles.inputs}
          placeholder="Fee Collected"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={fee}
          onChangeText={text => setFee(text)}
      />


      {/* --------------------------------------------------------------------- */}

<Text style = {styles.lable}>Payment Mode</Text>
<View style={styles.main}>
      <TouchableOpacity 
              onPress={() => {
                setSelectedpay(1);
                setCategorypay('Cash');
              }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selectedpay == 1 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Cash</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.main}>
      <TouchableOpacity 
      onPress={() => {
        setSelectedpay(2);
        setCategorypay('Online');
      }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selectedpay == 2 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Online</Text>
        </View>
      </TouchableOpacity>
    </View>


    <View style={styles.main}>
      <TouchableOpacity 
      onPress={() => {
        setSelectedpay(3);
        setCategorypay('Card');
      }}
      >
        <View style={styles.radioraper}>
            <View style = {styles.radio} >
                {
                    selectedpay == 3 ? <View style = {styles.radiobg}></View> : ''
                }
            </View>
            <Text style={styles.radiotxt}>Card</Text>
        </View>
      </TouchableOpacity>
    </View>

{/* --------------------------------------------------------------------- */}



      <Text style = {styles.lable}>Select Diagnosis</Text>
      <TextInput
        style = {[styles.inputs,{height: 100}]}
        placeholder="Select Diagnosis"
        multiline={true}
        numberOfLines={4} // optional, to set the initial number of lines visible
        onChangeText={text => setDiagnosis(text)}
        value={diagnosis}
        autoCorrect={false}
        maxLength={30}
        autoCapitalized="words"
        placeholderTextColor="#777"
      />



      <Text style = {styles.lable}>History</Text>
      <TextInput
        style = {[styles.inputs,{height: 100}]}
        placeholder="History"
        multiline={true}
        numberOfLines={4} // optional, to set the initial number of lines visible
        onChangeText={text => setHistory(text)}
        autoCorrect={false}
        maxLength={30}
        autoCapitalized="words"
        placeholderTextColor="#777"
        value={history}
      />

{/* --------------------------------------------------------------------------------------------------- */}
      <Text style = {styles.lable}>Upload Prescription Image</Text>
      <Text style = {[styles.inputs,{paddingVertical: 6}]}>{cameraphotoname}</Text>

      {cameraphoto == '' ? '' : <Image style = {styles.photo} source={{uri: cameraphoto}} />}
      

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
                onPress={opencamera}
                style = {styles.btn} 
                >
                <Text style = {styles.btntxt} >open Camera</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={opengallery}
                style = {styles.btn} 
                >
                <Text style = {styles.btntxt} >open Gallery</Text>
            </TouchableOpacity>
      </View>
          
  
{/* --------------------------------------------------------------------------------------------------- */}
      <Text style = {styles.lable}>Treatment Suggested</Text>
      <TextInput
        style = {[styles.inputs,{height: 100}]}
        placeholder="Treatment Suggested"
        multiline={true}
        numberOfLines={4} // optional, to set the initial number of lines visible
        onChangeText={text => setTreatment(text)}
        autoCorrect={false}
        maxLength={30}
        autoCapitalized="words"
        placeholderTextColor="#777"
        value={treatment}
      />

</ScrollView>

      </View>


      <TouchableOpacity 
        style = {styles.btn2}
        onPress={save}
        >
            <Text style = {styles.btntext2}>Submit</Text>
     </TouchableOpacity>

    </View>
  </>
  )
}

export default Addvisit

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
      },
    btn:{
        backgroundColor: '#1b75f0',
        height: 40,
        width: 130,
        marginHorizontal: 5,
        borderRadius: 8,
        marginTop:5,
        justifyContent: 'center'
    },
    btntxt:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
    },
    photo:{
        alignSelf: 'center',
        height: 400,
        width: 350,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "black"
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
    }
})