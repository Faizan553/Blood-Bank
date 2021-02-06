import React, { useState ,useEffect} from 'react';
import { StyleSheet, ScrollView, View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform,Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux'
import {login} from '../store/action'






const Home = (props) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
const [login,setlogin] = useState(false)
const [user,setuser] = useState(null)


useEffect(()=>{

  auth()
  .onAuthStateChanged((user)=> {
    if (user) {
      props.navigation.navigate('Blood Bank')
      
    
    } else {
      props.navigation.navigate('Sign In')

      
    }
    
  });
  

},[])



    return (
      
        <Container>
        
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
              onChangeText={(text)=>setemail(text)}
              // defaultValue={email}
              underlineColorAndroid="transparent"
              keyboardType="email-address"
              // secureTextEntry={true}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
              onChangeText={text=>setpassword(text)}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              />
            </Item>
          </Form>
          <Text></Text>
          <View style={{alignSelf:'center',}}>
          <Button primary
          onPress={()=>props.login(email,password,props)}
          ><Text> Sign in </Text></Button>
         
          </View>
          <Text></Text>
          
          <Text></Text>
          <View>
<Text style={{fontSize:18,marginLeft:5}} >Don't Have any Account?
  <Text 
  style={{color:'#0A60FF',fontSize:20}} 
  onPress={() => props.navigation.navigate('Registration')}
  >
    Sign Up
    </Text>



  </Text>            
          </View>
        </Content>
      </Container>
          
      
      
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
   
  

});


const mapstatetoprops = (state) =>({
  data: state.name,
  

})

const mapdispatchtoprops = (dispatch) => ({
  login: (e,p,h) => dispatch(login(e,p,h)),
 
})

export default connect(mapstatetoprops,mapdispatchtoprops)(Home)