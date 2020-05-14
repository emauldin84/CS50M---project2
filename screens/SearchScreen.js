import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard   } from 'react-native'
import Constants from 'expo-constants';

import ItemList from '../components/ItemList'

let SearchScreen = (props) => {
    const [searchText, setSearchText] = useState('')

    let handleTextChange = (text) => {
        setSearchText(text)
        props.handleMovieSearch(text)
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
                <ItemList movies={props.movies} setSelectedMovie={props.setSelectedMovie} navigation={props.navigation} setSearchText={setSearchText} setShowLoader={props.setShowLoader}/>
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


