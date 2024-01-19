import React from "react";
import { Button , View,TextInput , StyleSheet } from "react-native";
import { useState } from "react";
import { Text } from "react-native";

export default function LoginForm({props}){
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [errors,setErrors] = useState({email:"",password:""})
  // validate , submit , change
  function validate(){
    let error={email:"",password:""}
    if(email.length === 0) {
      error.email="Email is required"
    }
    if(password.length === 0) {
      error.password="Password is required"
    }
    setErrors(error)
    return (error.email.length === 0 && error.password.length === 0)
  }
  function submit(){
    let f=validate()
    if(f){
      setEmail("")
      setPassword("")
      setErrors({})
      return 1
    }
  }
  function changeEmail(text){
    setEmail(text)
    if(text.length !== 0){
      setErrors({...errors,email:""})
    }
  }
  function changePassword(pass){
    setPassword(pass)
    if(pass.length !== 0) {
      setErrors({...errors,password:""})
    }
  }
    return(
        <View>
             <Text style={styles.text}>Email</Text>
             <TextInput
                placeholder="Enter your Email"
                style={styles.input}
                value={email}
                onChangeText={(text)=>changeEmail(text)}
             />
             {errors.email? <Text style={styles.error}>{errors.email}</Text> : null }
             <Text style={styles.text}>Password</Text>
             <TextInput
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(pass)=>changePassword(pass)}
             />
             {errors.password ? <Text style={styles.error}>{errors.password}</Text>: null}
             <Button title="submit" onPress={()=>{
              if(submit()){
                props.navigation.navigate('Main')
              }
             }}/>


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
    error:{
      color:'red',
      marginLeft: 12
    }
  });