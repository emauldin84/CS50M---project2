import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from './screens/SearchScreen'
import ItemScreen from './screens/ItemScreen'


const Stack = createStackNavigator()

let App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Item" component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
