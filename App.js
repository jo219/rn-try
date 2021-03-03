import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Header from './src/components/header';

// At Home stacked pages
import Feed from './src/components/feed';
import MenuList from './src/components/menuList';
import Detail from './src/components/detail';

// sub-stacks of Details
import MenuTab from './src/screens/tabs/menu';
import ChatTab from './src/screens/tabs/chat';
import ReservedTab from './src/screens/tabs/reserved';

// Drawer (sidebar) 's' pages
import Account from './src/screens/drawer/account';
import Settings from './src/screens/drawer/settings';
import MoreAboutUs from './src/screens/drawer/moreAboutUs';

// Containers
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

// import Navigator from './routes/homeStack';

export default class App extends Component {

  createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen 
      name="Feed" 
      component={this.createTopTabs}
      options={{
        title: "Orange",
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "white"
      }} />
    <Stack.Screen name="Detail" component= {Detail} />
    <Stack.Screen name="Top Tabs" component= {MenuList} />
    <Stack.Screen name="Bottom Tabs" component= {this.createBottomTabs} />
  </Stack.Navigator>

  createTopTabs = () => {
    return <MaterialTopTabs.Navigator
        tabBarOptions={{
          activeTintColor: "darkgray",
          labelStyle: { fontWeight: '700', fontSize: 16 },
          indicatorStyle: { backgroundColor: "orange" }
      }}
    >
      <MaterialTopTabs.Screen 
        name="Tab 1" 
        component={MenuTab} 
        options={{ title: "Menu" }} 
      />
      <MaterialTopTabs.Screen 
        name="Tab 2" 
        component={ChatTab}
        options={{ title: "Chat" }} 
      />
      <MaterialTopTabs.Screen
        name="Tab 3" 
        component={ReservedTab}
        options={{ title: "Reserved" }} 
      />
    </MaterialTopTabs.Navigator>
  }

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab 1" component={MenuTab} />
      <MaterialBottomTabs.Screen name="Tab 2" component={ChatTab} />
      <MaterialBottomTabs.Screen name="Tab 3" component={ReservedTab} />
    </MaterialBottomTabs.Navigator>
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Account" component={Account}/>
          <Drawer.Screen name="Home" children={ this.createHomeStack }/>
          <Drawer.Screen name="Settings" component={Settings}/>
          <Drawer.Screen name="More About Us" component={MoreAboutUs}/>
        </Drawer.Navigator>
      </NavigationContainer>
      
    );
  }
}
