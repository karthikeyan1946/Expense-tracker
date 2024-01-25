import React, { useContext } from "react";
import {Image, View,Text ,Button} from "react-native";
import UserContext from "../../Context/UserContext";
import PieChart from "react-native-pie-chart";
import { StyleSheet } from "react-native";

export default function Dashboard(props){
    ///console.log(props)
    const widthAndHeight=250
    const series=[70,20,10]
    const sliceColor=['blue','green','yellow']
    const {currentUser,setCurrentUser} = useContext(UserContext)
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>Welcome! {currentUser}</Text>
            <View style={styles.chart}>
            <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor}/>
            </View>

        </View>
        
    )
}

const styles= StyleSheet.create({
    chart:{
        marginTop: 10,
        alignItems:'center'
    }
})

