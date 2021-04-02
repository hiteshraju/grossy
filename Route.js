import React , {useEffect, useState} from 'react';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import New from './src/screens/New';
import Completed from './src/screens/Completed';
import Profile from './src/screens/Profile';

import { NavigationContainer, HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator , View} from 'react-native';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator  >
      <Tab.Screen name="New" component = {New}
        options={{
          tabBarLabel: 'New Orders',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={'#857F54'} size={size} />
          ),
        }} />
      <Tab.Screen name="Completed" component={Completed} options={{
          tabBarLabel: 'Completed Orders',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkbox-marked" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen name="Profile" component={Profile}
      options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
const Route = () => {


  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setToken() {
      try {
        token = await AsyncStorage.getItem('userToken');
        setUserToken(token);
        setLoading(false);
      } catch(e) {
        console.log(e);
      }
    }  
    setToken();
  }, []);

  if(loading) {
    if (userToken) {
      return <Splash/>;
    }
    else {
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
  }

  return (
    <NavigationContainer>
      { userToken == null ? (
        <SettingsStack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <SettingsStack.Screen name="Splash" component={Splash} />
        <SettingsStack.Screen name="Login" component={Login} />
        <SettingsStack.Screen name="Home" component={HomeTabs}/>
        </SettingsStack.Navigator> ):
        <SettingsStack.Navigator screenOptions={{headerShown: false,}}>
        <SettingsStack.Screen name="Home" component={HomeTabs}/>
        <SettingsStack.Screen name="Login" component={Login} />
        </SettingsStack.Navigator>
      }
    </NavigationContainer>
  );
};
export default Route;