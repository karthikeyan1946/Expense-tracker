import React from "react";
import { Image , Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Screens/Dashboard";
import Expenses from "./Screens/Expenses";
import Profile from "./Screens/Profile";
import { ExpenseContext } from "../Context/ExpenseContext";
import { useContext ,useEffect} from "react";

import { getExpenses } from "../seeds/https";

const Tab=createBottomTabNavigator()

export default function Main(props){
    let value = useContext(ExpenseContext)
   useEffect(()=>{
        async function fetchData(){
          let res=await getExpenses()
          //console.log(res)
          value.setExpenses(res)
    
        }
        fetchData()
        
      },[])
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard} 
                options={{
                    headerTitle:"Dashboard",
                    tabBarIcon: ({size,focused})=>{
                        return(
                            focused ? <Image
                            style={{width:size,height:size}}
                            source={require('../images/dashboards.png')}
                         /> :
                            <Image
                               style={{width:size,height:size}}
                               source={require('../images/dashboard.png')}
                            />
                        )
                    },
                    tabBarActiveTintColor:'black'

                }}
            />




            




            <Tab.Screen 
                name="Expenses" 
                component={Expenses} 
                options={{
                    headerTitle:"Expenses",
                    tabBarIcon: ({size,focused})=>{
                        return(
                            focused ? <Image
                            style={{width:size,height:size}}
                            source={require('../images/expenses-on.png')}
                         /> :
                            <Image
                               style={{width:size,height:size}}
                               source={require('../images/expenses.png')}
                            />
                        )
                    },
                    tabBarActiveTintColor:'black'

                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    headerTitle:"Profile",
                    tabBarIcon: ({size,focused})=>{
                        return(
                            focused ? <Image
                            style={{width:size,height:size}}
                            source={require('../images/user-on.png')}
                         /> :
                            <Image
                               style={{width:size,height:size}}
                               source={require('../images/user.png')}
                            />
                        )
                    },
                    tabBarActiveTintColor:'black'
                }}
            />
        </Tab.Navigator>
    )
}