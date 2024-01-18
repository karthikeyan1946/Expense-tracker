import React from "react";
import { Image , Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Screens/Dashboard";
import Expenses from "./Screens/Expenses";
import Profile from "./Screens/Profile";


const Tab=createBottomTabNavigator()

export default function Main(props){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard} 
                options={{
                    headerShown:false,
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
                    }
                }}
            />




            




            <Tab.Screen 
                name="Expenses" 
                component={Expenses} 
                options={{
                    headerShown:false,
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
                    }
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    headerShown:false,
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
                    }
                }}
            />
        </Tab.Navigator>
    )
}