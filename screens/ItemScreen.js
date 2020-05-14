import React from 'react'
import { Dimensions ,Image, View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

import ItemList from '../components/ItemList'

let ItemScreen = ({selectedMovie}) => {
    console.log(selectedMovie)
    console.log(Dimensions.get('window'))

    return(
        <View style={styles.container}>
            <Image source={{uri: selectedMovie.Poster}} style={styles.image}/>
            <Text style={styles.text}>{selectedMovie.Title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#272727',
        padding: 10
    },
    text:{
        color: '#fff'
    },
    image:{
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').width*1.36
    }
})

export default ItemScreen


