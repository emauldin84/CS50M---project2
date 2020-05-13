import React, { useState } from 'react'
import { Button, View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard   } from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios'

let SearchScreen = () => {
    const [searchText, setSearchText] = useState('')
    const [movies, setMovies] = useState([])

    let handleTextChange = (text) => {
        setSearchText(text)
    }

    let handleMovieSearch = () => {
        axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&s=${searchText}`)
        .then(res => {
            console.log(res.data)
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
                <Button title='search' onPress={handleMovieSearch}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#272727',
    },
    searchText:{
        color: '#fff'
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'white',
        borderWidth: 1,
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 8,
        paddingVertical: 10,
    }
})

export default SearchScreen