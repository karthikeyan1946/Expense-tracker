import React from "react";
import { ScrollView, Text } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import ExpenseContext from "../../Context/ExpenseContext";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Expenses(props){
    const {expense,setExpense} = useContext(ExpenseContext)
   //console.log(expense)
   function navigateToEdit(item){
     //console.log(item)
     props.navigation.navigate('EditExpenses',{data:item})
   }
   function remove(data){
        let updatedExpense = expense.filter((item)=>{
            if(item.id !== data.id){
                return item
            }
        })
        console.log(updatedExpense)
        setExpense([...updatedExpense])
   }
    return(
       
        <View style={{flex:1}}>
        <Text>Expenses</Text>
        <Button title="Add expenses" onPress={()=> props.navigation.navigate('AddExpenses')}/>
        <View style={styles.space}>
            <FlatList 
                data={expense}
                renderItem={({item})=>{
                    return(
                            <View style={styles.item} key={item.id}>
                            <Text>title-{item.title}</Text>
                            <Text>recipient-{item.recipient}</Text>
                            <Text>amount-{item.amount}</Text>
                            <Text>category-{item.category}</Text>
                            <Text>date-{item.date}</Text>
                            <Button 
                                title="Edit" 
                                onPress={()=>navigateToEdit(item)}
                            />
                            <Button title="Delete" onPress={()=>remove(item)}/>
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
        marginTop:10,
        marginBottom:50
    }

})