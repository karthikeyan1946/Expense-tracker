import React from "react";
import { Button , View,TextInput , StyleSheet } from "react-native";



export default function LoginForm({props}){
    return(
        <View>
             <TextInput
                placeholder="Enter your Email"
                style={styles.input}
             />
             <TextInput
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry={true}
             />
             <Button title="submit" onPress={()=>props.navigation.navigate("Main")}/>


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
  });