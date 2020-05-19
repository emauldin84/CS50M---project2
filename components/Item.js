import React, {useEffect, useContext} from 'react'
import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'

import MovieContext from '../contexts/MovieContext'
import SettingsContext from '../contexts/SettingsContext'


let Item = ({itemDetails}) => {
    const {selectedMovie, setSelectedMovie, setShowLoader, navigation} = useContext(MovieContext)
    const {longPlotEnabled} = useContext(SettingsContext)
    
    const plotLength = longPlotEnabled ? 'full' : 'short'

    useEffect (() => {
        if(selectedMovie.imdbID === itemDetails.imdbID){
            axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&i=${itemDetails.imdbID}&plot=${plotLength}`)
            .then(res => {
                setSelectedMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [longPlotEnabled])

    const handleMovieSelect = () => {
        setShowLoader(true)
        navigation.navigate('Item')
        axios.get(`http://www.omdbapi.com/?apikey=48ba5f31&i=${itemDetails.imdbID}&plot=${plotLength}`)
        .then(res => {
            setSelectedMovie(res.data)
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