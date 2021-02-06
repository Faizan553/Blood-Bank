import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, ActivityIndicator, Platform, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Card, CardItem, Icon, Title, Text } from 'native-base';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { get } from '../../store/action'







const Tab2 = (props) => {

  const [docs, setDocs] = useState([]);
  const [A, setA] = useState(0);
  const [AA, setAA] = useState(0);
  const [B, setB] = useState(0);
  const [BB, setBB] = useState(0);
  const [C, setC] = useState(0);
  const [CC, setCC] = useState(0);
  const [D, setD] = useState(0);
  const [DD, setDD] = useState(0);





  React.useEffect(() => {

    props.get()
    



  }, []);
  var myVar;
  var a = 0;
  var aa = 0;
  var b = 0;
  var bb = 0;
  var c = 0;
  var cc = 0;
  var d = 0;
  var dd = 0;
  myVar = setTimeout(function () {
    setDocs(props.data)

    save()

  }, 1000);

  setTimeout(() => {
    clearTimeout(myVar);
  }, 1200);

  const save = () => {
    for (var i = 0; i < docs.length; i++) {
      switch (docs[i].select) {
        case "A+":
          a++
          break;
        case "A-":
          aa++
          break;
        case "B+":
          b++
          break;
        case "B-":
          bb++
          break;
          case "AB+":
          c++
          break;
        case "AB-":
          cc++
          break;
        case "O+":
          d++
          break;
        case "O-":
          dd++
          break;



        default:

      }
    }
    setA(a)
    setAA(aa)
    setB(b)
    setBB(bb)
    setC(c)
    setCC(cc)
    setD(d)
    setDD(dd)
    // console.log(a)
  }


  if ((docs.length < 1)) {
    return <ActivityIndicator size="large" color="#3F51B5" style={{ flex: 1 }} />
  }

  return (

    <View style={{ flex: 1 }}>

      <Header>
        <Left>
          <Button transparent
            onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name='menu-outline' />
          </Button>
        </Left>
        <Body>
          <Title>Blood Bank</Title>
        </Body>
        <Right />
      </Header>
      <View>
        <ScrollView>
          <View>
            <Text></Text>
            <View style={{ alignSelf: 'center', }}>


              <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                Donors
         </Text>

            </View>
            <Text></Text>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>A+</Text>
                  <Right>
                    <Text>{A}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>



            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>A-</Text>
                  <Right>
                    <Text>{AA}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>


            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>B+</Text>
                  <Right>
                    <Text>{B}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>B-</Text>
                  <Right>
                    <Text>{BB}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>AB+</Text>
                  <Right>
                    <Text>{C}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>AB-</Text>
                  <Right>
                    <Text>{CC}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>O+</Text>
                  <Right>
                    <Text>{D}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>

            <View>
              <Card>
                <CardItem >
                  <FontAwesome5 name="tint" size={20} color='red' style={{ marginRight: 10 }} />

                  <Text>O-</Text>
                  <Right>
                    <Text>{DD}</Text>

                  </Right>

                </CardItem>
              </Card>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

          </View>
        </ScrollView>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({

});


const mapstatetoprops = (state) => ({
  data: state.data,


})

const mapdispatchtoprops = (dispatch) => ({
  get: () => dispatch(get()),

})

export default connect(mapstatetoprops, mapdispatchtoprops)(Tab2)