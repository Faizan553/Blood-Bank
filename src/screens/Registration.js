import React,{useState} from 'react';
import {StyleSheet,ScrollView,View,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux'
import {signup} from '../store/action'

const Registration =(props)=>{

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

  

    return(
        
            <Container>
        
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input 
              onChangeText={(text)=>setname(text)}
              underlineColorAndroid="transparent"
              keyboardType='default'
            //   secureTextEntry={true}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
              onChangeText={(text)=>setemail(text)}
              underlineColorAndroid="transparent"
              keyboardType='email-address'
            //   secureTextEntry={true}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
              onChangeText={(text)=>setpassword(text)}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              />
            </Item>
      </Form>
          <Text></Text>
          <View style={{alignSelf:'center',}}>
          <Button primary
          onPress={()=>props.signup(name,email,password,props)}
         
          ><Text> Sign Up </Text></Button>
          
          </View>
          
        </Content>
      </Container>
        
    )
}

const mapstatetoprops = (state) =>({
    data: state.name,
    
  
  })
  
  const mapdispatchtoprops = (dispatch) => ({
    signup: (n,e,p,h) => dispatch(signup(n,e,p,h)),
   
  })
  
  export default connect(mapstatetoprops,mapdispatchtoprops)(Registration)

