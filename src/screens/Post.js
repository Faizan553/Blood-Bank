import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform,Image } from 'react-native';
import {  Container, Header, Content, Form, Item, Input, Label, Button, Text,Picker,List, ListItem, InputGroup, Icon,} from 'native-base';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {post} from '../store/action'



const Post = (props) => {


const [select,setselect] = useState('A+')
const [name,setname] = useState('')
const [contact,setcontact] = useState('')
const [location,setlocation] = useState('')
 
const Show =(value)=>{
  setselect(value)
  
}
var d= new Date();
var h = d.getHours()
var m = d.getMinutes()

    return (
    
      
  <Container>
        <Content>
          <Form>
          <Item stackedLabel>
              <Label>Name</Label>
              <Input 
              onChangeText={(text)=>setname(text)}
              defaultValue={name}
              underlineColorAndroid="transparent"
              keyboardType="default"
              />
            </Item>
            <Item stackedLabel>
              <Label>Contact No:</Label>
              <Input
              onChangeText={(text)=>setcontact(text)}
              underlineColorAndroid="transparent"
              keyboardType='number-pad'
              />
            </Item>
            <Item stackedLabel>
              <Label>Location:</Label>
              <Input
              onChangeText={text=>setlocation(text)}
              underlineColorAndroid="transparent"
              keyboardType="default"
              />
            </Item>
            <Item>
            <Label>Blood Group:</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"/>}
                style={{ width: undefined}}
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
            <Text></Text>
            <View style={{alignSelf:'center',}}>
          <Button primary
          onPress={()=>props.post(name,contact,location,select,props)}
          ><Text> Post </Text></Button>
         
          </View>
          </Form>
        </Content>
      </Container>
          
            
    )
}
const styles = StyleSheet.create({

});


const mapstatetoprops = (state) =>({
  data: state.name,
  

})

const mapdispatchtoprops = (dispatch) => ({
  post: (a,c,l,s,p) => dispatch(post(a,c,l,s,p)),
 
})

export default connect(mapstatetoprops,mapdispatchtoprops)(Post)