import React, { useState,useEffect } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Card, CardItem, Icon, Title, Text, DeckSwiper } from 'native-base';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import database from '@react-native-firebase/database';
// import {get} from '../../store/action'
// import {get} from '../../store/action'
// import call from 'react-native-phone-call'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Profile = (props) => {




  return (
    
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
<Text>Profile</Text>
  
    </View>

  )
}



const mapstatetoprops = (state) => ({
  data: state.name,
  


})

const mapdispatchtoprops = (dispatch) => ({
    // get: () => dispatch(get()),

})

export default connect(mapstatetoprops, mapdispatchtoprops)(Profile)