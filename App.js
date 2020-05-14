import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import axios from 'axios'

import SearchScreen from './screens/SearchScreen'
import ItemScreen from './screens/ItemScreen'



const Stack = createStackNavigator()

let App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  
  let handleMovieSearch = (searchText) => {
    axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&s=${searchText}&plot=short&page=1`)
    .then(res => {
        setMovies(res.data.Search)
    })
    .catch(err => {
      console.log(err)
    })
  }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Search'>
          <Stack.Screen name="Search">
            {props => <SearchScreen {...props} setSelectedMovie={setSelectedMovie} handleMovieSearch={handleMovieSearch} movies={movies}/>}
          </Stack.Screen>
          <Stack.Screen name="Item">
            {props => <ItemScreen {...props} selectedMovie={selectedMovie}/>}
          </Stack.Screen>
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
