

import React,{useState} from 'react';
import {StyleSheet,ScrollView,View,Text,StatusBar,Button,TouchableOpacity,TextInput} from 'react-native';
// import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database';
import Home from './src/screens/Home'
import Registration from './src/screens/Registration'
import Navigation from './src/config/Navigation'


const App = ()=>{

 
  return (
    
  <Navigation />
  
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  // backgroundColor:'green',
  },
  

  
});

export default App;
