import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import axios from 'axios'

import MovieContext from '../contexts/MovieContext'

import SearchScreen from '../screens/SearchScreen'
import ItemScreen from '../screens/ItemScreen'



const Stack = createStackNavigator()

let HomeStack = ({navigation}) => {
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
            <MovieContext.Provider 
                value={{
                    movies,
                    setMovies,
                    selectedMovie,
                    setSelectedMovie,
                    showLoader,
                    setShowLoader,
                    navigation,
                    handleMovieSearch
                }} 
            >
                
                <Stack.Navigator initialRouteName='Search'>
                    <Stack.Screen 
                        name="Search"
                        component={SearchScreen}
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
                        component={ItemScreen}
                        >
                    </Stack.Screen>
                </Stack.Navigator>

            </MovieContext.Provider>
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