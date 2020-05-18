import React, {useState} from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import Constants from 'expo-constants';



let SettingsScreen = (props) => {
    const toggleSwitch = () => props.setLongPlotEnabled(previousState => !previousState)
    
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