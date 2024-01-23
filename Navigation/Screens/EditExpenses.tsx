import React from "react";
import { Text ,TextInput} from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function EditExpenses(){
   
    const categories =["Food","Transportation","Utilities"]
    const [date,setDate]=useState(new Date())
    const [open,setOpen]= useState(false)
    const [expense,setExpense] = useState({title:'',recipient:'',amount:'',category:'',date:''})
    return(
        <View>
            <Text>fill the default pre filled values</Text>
            <Text style={styles.text}>Title</Text>
            <TextInput placeholder="Enter Title" style={styles.input} value={expense.title} onChangeText={(text)=>setExpense({...expense,title:text})}/>
            <Text style={styles.text}>Recipient</Text>
            <TextInput placeholder="Enter Recipient" style={styles.input} value={expense.recipient} onChangeText={(text)=>setExpense({...expense,recipient:text})}/>
            <Text style={styles.text}>Amount</Text>
            <TextInput placeholder="Enter Amount" keyboardType="numeric" style={styles.input} value={expense.amount} onChangeText={(text)=>setExpense({...expense,amount:text})}/>
            <Text style={styles.text}>Category</Text>
            <View style={styles.select}>
            <SelectDropdown
                data={categories}
                onSelect={(selectedItem,index)=>{
                    //console.log(selectedItem,index)
                    setExpense({...expense,category:selectedItem})
                }}
                defaultButtonText={expense.category}
                buttonTextAfterSelection={(selectedItem,index)=>{
                    return selectedItem
                }}
                rowTextForSelection={(item,index)=>{
                    return item
                }}
                
                
            />
            </View>
            <Text style={styles.text}>Date-{expense.date}</Text>
            <Button title="Date" onPress={()=>setOpen(true)}/>
            <DatePicker
               modal
               open={open}
               date={date}
               onConfirm={(date)=>{
                setOpen(false)
                setDate(date)
                //console.log(date.toLocaleDateString())
                let selectedDate=date.toLocaleDateString()
              
                setExpense({...expense,date:selectedDate})
               }}
               onCancel={()=>{
                setOpen(false)
               }}
               mode="date"
            />
            
            <Button title="Submit" onPress={()=>{
                console.log(expense)
                setExpense({title:'',recipient:'',amount:'',category:'',date:''})
            }
            }/>
                     
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