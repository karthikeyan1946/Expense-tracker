import React, { useContext } from "react";
import { Text } from "react-native";
import UserContext from "../../Context/UserContext";
import { View } from "react-native";
import PieChart from "react-native-pie-chart";

export default function Profile(){
    const {currentUser,setCurrentUser} = useContext(UserContext)
    const widthAndHeight=250
    const series=[70,20,10]
    const sliceColor=['blue','green','yellow']
    return(
        <View>
            <Text>Profile</Text>
            <Text>welcome {currentUser}</Text>
            <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor}/>
        </View>
    )
}