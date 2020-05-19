import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './stacks/HomeStack'
import SettingsStack from './stacks/SettingsStack'

import SettingsContext from './contexts/SettingsContext'

const Tab = createBottomTabNavigator();

let App = () => {
  const [longPlotEnabled, setLongPlotEnabled] = useState(false);

    return (
      <SettingsContext.Provider value={{longPlotEnabled, setLongPlotEnabled}}>
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
              component={HomeStack}  
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name='ios-home' size={size} color={color} />
                )
              }}
            >
            </Tab.Screen>
            <Tab.Screen 
              name="Settings" 
              component={SettingsStack}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size}) => (
                  <Ionicons name='ios-settings' size={size} color={color} />
                )
              }}
            > 
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SettingsContext.Provider>
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
