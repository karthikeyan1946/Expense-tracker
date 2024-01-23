import React from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

export default function Expenses(props){
    const [allExpenses,setAllExpenses] = useState([
        {title:'dosa',recipient:'leo',amount:'100',category:'food',date:'1/21/2024'},
        {title:'auto',recipient:'white',amount:'60',category:'travel',date:'1/20/2024'},
        {title:'books',recipient:'taki',amount:'200',category:'utilities',date:'1/15/2024'}
    ])
    return(
        <View>
        <Text>Expenses,create list to show expenses</Text>
        <Button title="Add expenses" onPress={()=> props.navigation.navigate('AddExpenses')}/>
        <View style={styles.space}>
            <FlatList 
            data={allExpenses}
            renderItem={({item})=>{
                return(
                    <View style={styles.item}>
                        <Text>title-{item.title}</Text>
                        <Text>recipient-{item.recipient}</Text>
                        <Text>amount-{item.amount}</Text>
                        <Text>category-{item.category}</Text>
                        <Text>date-{item.date}</Text>
                        <Button title="Edit" onPress={()=>props.navigation.navigate('EditExpenses')}/>
                    </View>
                )
            
        }}
            />
        </View>
        </View>
    )
}


const styles=StyleSheet.create({
    item:{
        borderWidth:1,
        margin:5,
        padding:5
    },
    space:{
        marginTop:10
    }

})