import React from 'react'
import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'



let Item = ({itemDetails, setSelectedMovie, navigation, setSearchText, setShowLoader}) => {
    console.log(itemDetails)
    const handleMovieSelect = () => {
        setShowLoader(true)
        navigation.navigate('Item')
        axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&i=${itemDetails.imdbID}&plot=short&page=1`)
        .then(res => {
            setSelectedMovie(res.data)
            setSearchText('')
        })
        .then(() => {
            setShowLoader(false)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <TouchableOpacity style={styles.container} onPress={handleMovieSelect}>
            <Image source={{uri: itemDetails.Poster}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{itemDetails.Title}</Text>
                <View style={styles.subtextContainer}>
                    <Text style={styles.text}>{itemDetails.Year}</Text>
                    <Text style={styles.text}>({itemDetails.Type})</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 2,
        flexDirection: 'row'
    },
    textContainer:{
        flexDirection:'column',
        paddingHorizontal: 5,
        justifyContent: 'center',
        width: '90%',
    },
    subtextContainer:{
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        paddingHorizontal: 2
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Item