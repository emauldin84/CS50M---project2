import React, {useContext} from 'react'
import { FlatList, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import MovieContext from '../contexts/MovieContext'
import Item from './Item'


let ItemList = () => {
    const {movies} = useContext(MovieContext)

    return(
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={({item}) => <Item 
                                                itemDetails={item}  
                                            />}
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