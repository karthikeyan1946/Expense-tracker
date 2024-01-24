import React from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import InputForm from "../../components/InputForm";
import DropDown from "../../components/DropDown";
import DateInput from "../../components/DateInput";
import {ExpenseContext} from "../../Context/ExpenseContext";
import { useContext } from "react";


export default function AddExpenses(props: any){
   //console.log(Date.now())
    let value = useContext(ExpenseContext)
    const [addExpense,setAddExpense] = useState({id:'',title:'',recipient:'',amount:'',category:'',date:''})
    type addExpenseKey = keyof typeof addExpense
    function update(field: string,text: string){
        //console.log(field,text)
        Object.keys(addExpense).forEach((key)=>{
            
            if(field === key ){
               addExpense[key as addExpenseKey] =text
            }
        })
        setAddExpense({...addExpense})
    }
    function add(){
         //console.log(addExpense)
         addExpense.id=Date.now().toString()
         value.addExpense(addExpense)
         props.navigation.navigate('Expenses')
         //setAddExpense({title:'',recipient:'',amount:'',category:'',date:''})
    }
    return(
        <View>
            <InputForm expense={addExpense} update={update}/>
            <DropDown expense={addExpense} update={update}/>
            <DateInput expense={addExpense} update={update}/>
            
            <Button title="Add" onPress={add}/>
                     
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
    select:{
        borderWidth: 1,
        margin:12
    },
    
    
  });