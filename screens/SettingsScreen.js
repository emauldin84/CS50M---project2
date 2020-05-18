import React, {useState} from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import Constants from 'expo-constants';



let SettingsScreen = (props) => {
    console.log('PROPS',props)
    const toggleSwitch = () => props.setLongPlotEnabled(previousState => !previousState)

    const handleGoBack = () => {
        props.navigation.goBack()
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.controlsContainer}>
                <View style={styles.plotContainer}>
                    <Text style={styles.text}>Long Plot</Text>
                    <Switch
                        trackColor={{ false: "#fff", true: "#272727" }}
                        thumbColor={props.longPlotEnabled ? "#fff" : "#272727"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={props.longPlotEnabled}
                    />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        justifyContent: 'center',
    },
    // header:{
    //     flexDirection: 'row',
    //     paddingTop: Constants.statusBarHeight,
    //     backgroundColor: '#333',
    //     height: 88,
    //     width: '100%',
    //     alignItems: 'center',
    //     shadowOpacity: .3,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         height: 4,
    //     },
    //     shadowRadius: 2,
    // },
    // headerTitleText:{
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     color: '#fff',
    //     marginTop: 12,
    //     // marginLeft: 'auto',
    //     // marginRight: 'auto',
    //     textAlign: 'center'
    // },
    // headerBackText: {
    //     fontSize: 14,
    //     color: '#fff',
    //     marginTop: 12,
    //     // marginLeft: 'auto',
    //     // marginRight: '40%'
    // },
    controlsContainer:{
        flex: 1,
    },
    text:{
        color: '#fff',
        fontSize: 20
    },
    plotContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#333',

    }
});

export default SettingsScreen