// add date here
import { Text ,TextInput} from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function DateInput({expense,update}:any){
    const [date,setDate]=useState(new Date())
    const [open,setOpen]= useState(false)
    return(
        <View>
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
              
                update('date',selectedDate)
               }}
               onCancel={()=>{
                setOpen(false)
               }}
               mode="date"
            />
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
