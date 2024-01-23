// add text inputs here
import React from "react";
import { Text ,TextInput} from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function InputForm({expense,update}:any){
    return(
        <View>
            <Text style={styles.text}>Title</Text>
            <TextInput placeholder="Enter Title" style={styles.input} value={expense.title} onChangeText={(text)=>update('title',text)}/>
            <Text style={styles.text}>Recipient</Text>
            <TextInput placeholder="Enter Recipient" style={styles.input} value={expense.recipient} onChangeText={(text)=>update('recipient',text)}/>
            <Text style={styles.text}>Amount</Text>
            <TextInput placeholder="Enter Amount" keyboardType="numeric" style={styles.input} value={expense.amount} onChangeText={(text)=>update('amount',text)}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text:{
      marginTop: 12,
      marginLeft: 12
    },
    select:{
        borderWidth: 1,
        margin:12
    },
    
    
  });

