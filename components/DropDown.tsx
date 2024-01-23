// add dropdown here
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function DropDown({expense,update}:any){
    const categories =["Food","Transportation","Utilities"]
    return(
        <View>
            <Text style={styles.text}>Category</Text>
            <View style={styles.select}>
            <SelectDropdown
                data={categories}
                onSelect={(selectedItem,index)=>{
                    //console.log(selectedItem,index)
                    update('category',selectedItem)
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
