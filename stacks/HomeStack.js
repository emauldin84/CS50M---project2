import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import axios from 'axios'

import SearchScreen from '../screens/SearchScreen'
import ItemScreen from '../screens/ItemScreen'



const Stack = createStackNavigator()

let HomeStack = ({longPlotEnabled}) => {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})
    const [showLoader, setShowLoader] = useState(false)
    
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
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen name="Search"
                options={{
                    headerStyle: {
                    backgroundColor: '#333',
                    shadowOpacity: .3,
                    shadowColor: '#000',
                    shadowOffset: {
                        height: 4,
                    },
                    shadowRadius: 2,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    }
                    }}
                >
                    {props => <SearchScreen 
                    {...props} 
                    setMovies={setMovies}
                    setSelectedMovie={setSelectedMovie} 
                    handleMovieSearch={handleMovieSearch} 
                    movies={movies} 
                    setShowLoader={setShowLoader}
                    longPlotEnabled={longPlotEnabled}
                    />
                    }
                </Stack.Screen>
                <Stack.Screen name="Item"
                    options={{
                    title: selectedMovie.Title,
                    headerStyle: {
                        backgroundColor: '#333',
                        shadowOpacity: .3,
                        shadowColor: '#000',
                        shadowOffset: {
                            height: 4,
                        },
                        shadowRadius: 2,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                    }}
                    >
                    {props => <ItemScreen {...props} selectedMovie={selectedMovie} showLoader={showLoader}/>}
                </Stack.Screen>
            </Stack.Navigator>
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

export default HomeStack