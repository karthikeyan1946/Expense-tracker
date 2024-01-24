import React from "react";
import { Button , View,TextInput , StyleSheet } from "react-native";
import { useState } from "react";
import { Text } from "react-native";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { useEffect } from "react";
import axios from "axios";



let users;

async function fetchUsersData(){
  axios.get('https://expensetracker-bb0b9-default-rtdb.firebaseio.com/users.json')
      .then((res)=>{
        let ans=res.data
        //console.log(typeof(users))
        //console.log(res.data)
        users=Object.entries(ans).map(entry=>entry[1])
        //console.log(users)
      })
      .catch((err)=>{
        console.log(err)
      })
}
fetchUsersData()

export default function LoginForm({props}){
 
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [errors,setErrors] = useState({email:"",password:""})
  const [invalid,setInvalid] = useState()
  const {currentUser,setCurrentUser} = useContext(UserContext)
  
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
    let isValid=validate()
    if(isValid){
      setEmail("")
      setPassword("")
      setErrors({})
      let userValid=1;
      let currentUser
      users.map((user)=>{
        if(user.email === email && user.password === password){
          userValid=1;
          currentUser=user.name
        }
      })
      if(userValid){
        setCurrentUser(currentUser)
        setInvalid('')
        return 1

      }else{
        setInvalid('email or password is incorrect')
      }

      
    }
  }
  function changeEmail(text){
    setEmail(text)
    if(text.length !== 0){
      setErrors({...errors,email:""})
      setInvalid()
    }
  }
  function changePassword(pass){
    setPassword(pass)
    if(pass.length !== 0) {
      setErrors({...errors,password:""})
      setInvalid()
    }
  }
  function handleSubmit(){
    if(submit()){
      props.navigation.navigate('Main')
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
             {invalid ? <Text style={styles.error}>{invalid}</Text> : null}
             <Button title="submit" onPress={handleSubmit}/>


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