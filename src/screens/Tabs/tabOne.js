import React, { useState,useEffect, version } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Linking,Platform, Image,ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Card, CardItem, Icon, Title, Text, DeckSwiper ,} from 'native-base';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {get} from '../../store/action'
// import {get} from '../../store/action'
// import call from 'react-native-phone-call'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Tab1 = (props) => {

 
    

    
  const [docs, setDocs] = useState([]);
  

  
  React.useEffect(() => {

        props.get()

       
  }, []);
  var myVar;

  myVar = setTimeout(function(){ 
    
    setDocs(props.data)
    
   }, 1000);

   
setTimeout(() => {
  clearTimeout(myVar);
  
}, 1200);


   

    if((docs.length<1)){
      return <ActivityIndicator size="large" color="#3F51B5" style={{flex:1}}/>
    }
    
  

 
 const dialCall =(v)=>{
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${v}`;
  } else {
    phoneNumber = `telprompt:${v}`;
  }

  Linking.openURL(phoneNumber);
 }
 
 
 
  
  return (
    
    <View style={{flex:1}}>
      
    


      <Header>
        <Left >
          <Button transparent
         
            onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name='menu-outline' 
            />
          </Button>
        </Left>
        <Body>
          <Title>Blood Bank</Title>
        </Body>
        <Right />
      </Header>
    

<View style={styles.main}>
  
<View>
{/* {docs.map((v,i)=>{
  return <Text key={i}>{v.name}</Text>
})} */}
   <ScrollView>

{docs.map((v,i)=>{
 
 return  <View key={i}>
  <Card>
            <CardItem>
              <Body>
              <Text style={{fontSize:14}}>
                   Blood Group:{v.select}
                </Text>
                <Text style={{fontSize:14}}>
                   Name:{v.name}
                </Text>
                <Text style={{fontSize:14}}>
                   Contact:{v.contact}
                </Text>
                <Text style={{fontSize:14}}>
                   Location:{v.location}
                </Text>
                
                
              </Body>
              <Right >
              <FontAwesome5 name="phone-alt" size={30} color='#3F51B5'
              onPress={()=>dialCall(v.contact)}
              />
              
              </Right>
            </CardItem>
          </Card>
</View>
})}
    
      
      
</ScrollView>
</View>
</View>

<View style={styles.plus}>
<FontAwesome5 name="plus" size={25} color='#fff' style={styles.icon}
onPress={()=>props.navigation.navigate('Post')}
/>
</View>
  
    </View>

  )
}

const styles = StyleSheet.create({
main:{
// backgroundColor:"yellow",
height:'92%'
},
plus:{
  position:'absolute',
  bottom:25,
  right:25
},
icon:{
  backgroundColor:"#3F51B5",
  paddingTop:15,
  paddingBottom:15,
  paddingRight:17,
  paddingLeft:17,
  borderRadius:50,
}
});


const mapstatetoprops = (state) => ({
  data: state.data,
  


})

const mapdispatchtoprops = (dispatch) => ({
    get: () => dispatch(get()),

})

export default connect(mapstatetoprops, mapdispatchtoprops)(Tab1)