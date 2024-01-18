import React from "react";
import { Text } from "react-native";
import { SafeAreaView ,TextInput , StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";



export default function Login(props){
    return(
        <SafeAreaView>
            <LoginForm props={props}/>

        </SafeAreaView>
       
    )
}

