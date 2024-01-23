import React, { useContext } from "react";
import { Text } from "react-native";
import UserContext from "../../Context/UserContext";
import { View } from "react-native";

export default function Profile(){
    const {currentUser,setCurrentUser} = useContext(UserContext)
    return(
        <View>
            <Text>Profile</Text>
            <Text>welcome {currentUser}</Text>
        </View>
    )
}