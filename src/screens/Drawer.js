import React ,{useState,useEffect}from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';




import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';







export function DrawerContent(props) {
    const [name,setname] = useState()
    const [email,setemail] = useState()

    const signout =()=>{
        
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        // console.log('logout')
    }
    

        auth()
        .onAuthStateChanged((user)=> {
          if (user) {
           setname(user.displayName)
           setemail(user.email)
            
          
          } else {
            console.log('not')
      
            
          }
          
        });
        
      
      

    return (
    
        <View style={{ flex: 1 }}>


            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 10}}>
                            <Avatar.Image 
                            source={{
                                uri:'data:image/png;base64,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'
                            
                            }}
                            size={70}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                            <Title style={styles.title}>{name}</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                            </View>
                            </View>
                    </View>
                    <View>
                        <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
                    icon={({ color, size }) => (
                        <FontAwesome5 name="home" size={size} color={color}
                            
                        />
                    )}
                    label="Home"
                />
                  {/* <Drawer.Item
                onPress={() => props.navigation.navigate('Profile')}
                    icon={({ color, size }) => (
                        <FontAwesome5 name="user" size={size} color={color}
                            
                        />
                    )}
                    label="Profile"
                /> */}
                  <Drawer.Item
                onPress={() => props.navigation.navigate('Donors')}
                    icon={({ color, size }) => (
                        <FontAwesome5 name="tint" size={size} color={color}
                            
                        />
                    )}
                    label="Search Donor"
                />
                  {/* <Drawer.Item
                onPress={() => console.log('setting')}
                    icon={({ color, size }) => (
                        <FontAwesome5 name="cog" size={size} color={color}
                            
                        />
                    )}
                    label="Setting"
                /> */}


                        </Drawer.Section>
                    </View>

                </View>
            </DrawerContentScrollView>



            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item
                onPress={() => signout()}
                    icon={({ color, size }) => (
                        <FontAwesome5 name="sign-out-alt" size={size} color={color}
                            
                        />
                    )}
                    label="Sign Out"
                />


            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


const mapstatetoprops = (state) => ({
    data: state.name,
    
  
  
  })
  
  const mapdispatchtoprops = (dispatch) => ({
    //   get: () => dispatch(get()),
  
  })
  
  export default connect(mapstatetoprops, mapdispatchtoprops)