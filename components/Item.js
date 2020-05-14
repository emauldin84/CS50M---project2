import React from 'react'
import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native'



let Item = ({itemDetails}) => {
    console.log(itemDetails)
    return(
        <TouchableOpacity style={styles.container}>
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