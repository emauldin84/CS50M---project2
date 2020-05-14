import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard   } from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios'

import ItemList from '../components/ItemList'

let SearchScreen = () => {
    const [searchText, setSearchText] = useState('')
    const [movies, setMovies] = useState([])

    let handleTextChange = (text) => {
        setSearchText(text)
        handleMovieSearch(text)
    }

    let handleMovieSearch = (searchText) => {
        axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&s=${searchText}&plot=short&page=1`)
        .then(res => {
            // console.log(res.data)
            setMovies(res.data.Search)
        })
    }



    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={text => handleTextChange(text)} 
                    value={searchText}
                    placeholder='Search...'
                    placeholderTextColor='white'
                />
                <ItemList movies={movies}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#272727',
    },
    text:{
        color: '#fff'
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'white',
        borderBottomWidth: 1,
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 8,
        paddingVertical: 10,
    }
})

export default SearchScreen



// `http://www.omdbapi.com/?apikey=48ba5f31&t=${searchText}&plot=short&page=1`