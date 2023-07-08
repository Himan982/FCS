import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import reactNativeHTMLTOPdf from 'react-native-html-to-pdf';

const Fees_Report = () => {
  const generatePDF = async () => {
    const options = {
      html: "<h1>Hello</h1>",
      filename: "fee_report",
      directory: "Documents"
    }

    const file = await reactNativeHTMLTOPdf.convert(options);
    console.log(file);
  }
  return (
    <View >
      <TouchableOpacity
        onPress={generatePDF}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Generate PDF</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Fees_Report

const styles = StyleSheet.create({
  btn:{
    width: 200,
    marginTop: 50,
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