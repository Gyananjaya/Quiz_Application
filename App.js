import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      
    // </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },
  
});