import * as React from 'react';
import {Button,Text} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Registration from '../screens/Registration'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import { HeaderBackButton } from '@react-navigation/stack';
import Tab1 from '../screens/Tabs/tabOne';
import Tab2 from '../screens/Tabs/tabTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Post from '../screens/Post'
import { DrawerContent } from '../screens/Drawer'
// import Profile from '../screens/Profile'
import Donors from '../screens/Donors'
function Bottom() {
  return (
  
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'search' : 'search';
        } else if (route.name === 'Donors') {
          iconName = focused ? 'list' : 'list';
        }

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
    <Tab.Screen name="Home" component={Tab1}/>
    <Tab.Screen name="Donors" component={Tab2} />
 
  </Tab.Navigator>
    
  );
}




function DrawerApp(props) {
  return (
  
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Homes" component={Bottom} />
     
        
        
      </Drawer.Navigator>
    
  );
}

function Navigation() { 


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Blood Bank" component={DrawerApp}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="Post" component={Post} 
        options={{
          title:"Post Donor"
        }}
        />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="Donors" component={Donors} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Navigation;