/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Navigation/Main';
import Login from './Navigation/Login';
import Profile from './Navigation/Screens/Profile';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack=createNativeStackNavigator()

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <NavigationContainer>
        <Stack.Navigator>
         
          

         
          <Stack.Screen
             name="Login"
             component={Login}
          />
           <Stack.Screen
             name="Main"
             component={Main}
             options={{headerTitle:"App"}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
            
          
        </Stack.Navigator>
      </NavigationContainer>
      
      
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
