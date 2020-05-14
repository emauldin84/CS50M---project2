import React from 'react'
import { Image, View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'

let ItemScreen = ({selectedMovie, showLoader}) => {
    console.log(selectedMovie)

    return(
            showLoader ? 
            <View style={{...styles.container, ...styles.loaderContainer}}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
                :
                <View style={styles.container}>
                <Image source={{uri: selectedMovie.Poster}} style={styles.image} resizeMode='contain'/>
                <View style={styles.grouped}>
                    <Text style={{...styles.text, ...styles.title}}>{selectedMovie.Title}</Text>
                    <Text style={{...styles.text, ...styles.small}}>({selectedMovie.Year})</Text>
                </View>
                <View style={styles.grouped}>
                    <Text style={{...styles.text, ...styles.small}}>{selectedMovie.Rated}</Text>
                    <Text style={{...styles.text, ...styles.small}}>({selectedMovie.Runtime})</Text>
                </View>
                <View style={styles.grouped}>
                    <Text style={{...styles.text, ...styles.small, ...styles.plot}}>{selectedMovie.Plot}</Text>
                </View>
                <View style={styles.grouped}>
                    <Text style={{...styles.text, ...styles.small}}>{selectedMovie.Ratings[0].Source}</Text>
                    <Text style={{...styles.text, ...styles.small}}>{selectedMovie.Ratings[0].Value}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        padding: 10
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#fff',
    },
    grouped:{
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 10,
        width: '100%',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    small: {
        marginTop: 5,
        marginLeft: 8,
    },
    image:{
        flexGrow: .5,
    },
    plot: {
        fontStyle: 'italic'
    },
        
})

export default ItemScreen


