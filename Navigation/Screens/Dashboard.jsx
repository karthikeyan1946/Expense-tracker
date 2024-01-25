import React, { useContext } from "react";
import {Image, View,Text ,Button} from "react-native";
import UserContext from "../../Context/UserContext";
import PieChart from "react-native-pie-chart";
import { StyleSheet } from "react-native";
import { ExpenseContext } from "../../Context/ExpenseContext";



export default function Dashboard(props){
    let value = useContext(ExpenseContext)
    //console.log(props)
    //console.log(value.expense)
    let total=0
    let utilities=0;
    let transportation=0;
    let food=0;
    let expenses=value.expense
    expenses.map((expense)=>{
        total=total+Number(expense.amount)
        if(expense.category === "Utilities"){
            utilities+=Number(expense.amount)
        }else if(expense.category === "Food"){
            food+=Number(expense.amount)
        }else{
            transportation+=Number(expense.amount)
        }
    })
    console.log(utilities,food,transportation)
    utilities=utilities/total
    transportation/=total
    food/=total
    
    const widthAndHeight=250
    const series=[utilities,transportation,food]
    const sliceColor=['skyblue','lightgreen','yellow']
    const {currentUser,setCurrentUser} = useContext(UserContext)
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>Welcome! {currentUser}</Text>
            <Text>utilities:skyblue ; transportation:lightgreen ; food:yellow</Text>
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

