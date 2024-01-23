import React, { useContext } from "react";
import {Image, View,Text ,Button} from "react-native";
import UserContext from "../../Context/UserContext";



export default function Dashboard(props){
    ///console.log(props)
    const {currentUser,setCurrentUser} = useContext(UserContext)
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>Welcome! {currentUser}</Text>

        </View>
        
    )
}