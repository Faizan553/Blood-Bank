import React, { useState,useEffect } from 'react';
import { StyleSheet, ScrollView, View,ActivityIndicator, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image, } from 'react-native';
import { Container, Header, Content, Icon, Picker, Form,Label,Item , Left, Body, Right, Button, Card, CardItem, Title, Text,} from 'native-base';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {get} from '../store/action'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';




const Donors = (props) => {

    const [docs, setDocs] = useState([]);
    // const [docs1, setDocs1] = useState([]);
    const [set, settrue] = useState(true);


    const [select,setselect] = useState('A+')
    const [select1,setselect1] = useState('AB+')
    const [select2,setselect2] = useState(null)
    const [select3,setselect3] = useState(null)
    const [select4,setselect4] = useState(null)
    const [select5,setselect5] = useState(null)
    const [select6,setselect6] = useState(null)
    const [select7,setselect7] = useState(null)
    
   

const Show=(v)=>{

    setselect(v)
    
  
     if(v=='AB-'){
      
     setselect1('O-')
     setselect2('A-')
     setselect3('B-')
     setselect4(null)
     setselect5(null)
     setselect6(null)
     setselect7(null)
     
       
     }
     else if (v=='AB+'){
      setselect1('O-')
      setselect2('O+')
      setselect3('A-')
      setselect4('A+')
     setselect5('B-')
     setselect6('B')
     setselect7('AB-')
     }
     else if (v=='A+'){
      setselect1('A-')
      setselect2('O-')
      setselect3('O+')
      setselect4(null)
     setselect5(null)
     setselect6(null)
     setselect7(null)

     }
     else if (v=='A-'){
      setselect1('O-')
      setselect2('A-')
      setselect3(null)
      setselect4(null)
     setselect5(null)
     setselect6(null)
     setselect7(null)
     }
     else if (v=='B+'){
      setselect1('O-')
      setselect2('O+')
      setselect3('B-')
      setselect4('B+')
     setselect5(null)
     setselect6(null)
     setselect7(null)
     }
     else if (v=='B-'){
      setselect1('O-')
      setselect2('B-')
      setselect3(null)
      setselect4(null)
     setselect5(null)
     setselect6(null)
     setselect7(null)
     }
     else if (v=='O+'){
      setselect1('O-')
      setselect2(null)
      setselect3(null)
      setselect4(null)
     setselect5(null)
     setselect6(null)
     setselect7(null)
     }
     else if (v=='O-'){
      setselect1(null)
      setselect2(null)
      setselect3(null)
      setselect4(null)
      setselect5(null)
      setselect6(null)
      setselect7(null)
     }
    
   
}


useEffect(() => {



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


  return (
    
   <View>
        
        
          <Form>
              <Item>
          <Label>Blood Group:</Label>
          <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              onValueChange={(value)=>Show(value)}
              selectedValue={select}
            >
              <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
            </Picker>
            </Item>
          </Form>
       

<View>
<ScrollView>
{/* {save.map((v,i)=>{
  return<Text key={i}>{v.select}</Text>
})} */}

{docs.map((v,i)=>{
 
 return  <View key={i}>
   
   {v.select == select  &&  <Card>
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
            </CardItem>
          </Card>
}
          
   {v.select == select1  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select2  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select3  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select4  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select5  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select6  &&  <Card>
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
    </CardItem>
  </Card> }
  {v.select == select7  &&  <Card>
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
    </CardItem>
  </Card> }
</View> 


})}
    
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
     
</ScrollView>
</View>

</View>
  
    

  )
}



const mapstatetoprops = (state) => ({
  data: state.data,
  


})

const mapdispatchtoprops = (dispatch) => ({
    get: () => dispatch(get()),

})

export default connect(mapstatetoprops, mapdispatchtoprops)(Donors)