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

    let handleClearText = () => {
        setSearchText('')
        props.setMovies([])
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        onChangeText={text => handleTextChange(text)} 
                        value={searchText}
                        placeholder='Search OMDB'
                        placeholderTextColor='white'
                    />
                    {searchText.length > 0 ? <Text style={{...styles.clear, ...styles.text}} onPress={handleClearText}>clear</Text> : null}

                </View>
                <ItemList movies={props.movies} setSelectedMovie={props.setSelectedMovie} navigation={props.navigation} setSearchText={setSearchText} setShowLoader={props.setShowLoader}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#272727',
        borderWidth: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        color: '#fff'
    },
    clear: {
        marginLeft: -32
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


