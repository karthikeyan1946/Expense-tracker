import React from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import InputForm from "../../components/InputForm";
import DropDown from "../../components/DropDown";
import DateInput from "../../components/DateInput";
import ExpenseContext from "../../Context/ExpenseContext";
import { useContext } from "react";




export default function EditExpenses(props: any){
   
   //console.log(props.route.params)
   const {expense,setExpense}:any = useContext(ExpenseContext)
   const {data}=props.route.params
   //console.log(data)
    const [editExpense,setEditExpense] = useState({...data})
    type T = keyof typeof editExpense
    function update(field: string,text: string){
        //console.log(field,text)
        Object.keys(editExpense).forEach((key)=>{
            
            if(field === key ){
               editExpense[key as T] =text
            }
        })
        setEditExpense({...editExpense})
    }
    function edit(){
        //console.log(editExpense)
        //setEditExpense({title:'',recipient:'',amount:'',category:'',date:''})
        let updatedExpense = expense.map((item: { id: any; })=>{
            if(item.id === data.id){
                    return editExpense
            }
            return item
        })
        //console.log(updatedExpense)
        setExpense([...updatedExpense]) // add unique id to edit the particular expense
        props.navigation.navigate('Expenses')
    }
    return(
        <View>
            <InputForm expense={editExpense} update={update}/>
            <DropDown expense={editExpense} update={update}/>
            <DateInput expense={editExpense} update={update}/>
            
            <Button title="Update" onPress={edit}/>
                     
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