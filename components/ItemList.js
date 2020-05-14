import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants';

import Item from './Item'


let ItemList = (props) => {
    return(
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={props.movies}
                    renderItem={({item}) => <Item itemDetails={item}/>}
                    keyExtractor={item => item.imdbID}
                />

            </SafeAreaView>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: '95%',
    },

})

export default ItemList