import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './stacks/HomeStack'
import SettingsStack from './stacks/SettingsStack'
import SettingsScreen from './screens/SettingsScreen'

const Tab = createBottomTabNavigator();

let App = () => {
  const [longPlotEnabled, setLongPlotEnabled] = useState(false);

    return (
      <NavigationContainer>
        <StatusBar barStyle='light-content'/>
        <Tab.Navigator
          initialRouteName='Search'
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#666',
            style:{
              backgroundColor: '#333',
              paddingTop: 5,
              
            },
          }}
        >
          <Tab.Screen 
            name="Home"  
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='ios-home' size={size} color={color} />
              )
            }}
          >
            {props => <HomeStack {...props} longPlotEnabled={longPlotEnabled}/>}
          </Tab.Screen>
          <Tab.Screen 
            name="Settings" 
            // component={SettingsScreen} 
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size}) => (
                <Ionicons name='ios-settings' size={size} color={color} />
              )
            }}
          > 
          {props => <SettingsStack {...props} longPlotEnabled={longPlotEnabled} setLongPlotEnabled={setLongPlotEnabled}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
});

export default App
