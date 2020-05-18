import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator()

let SettingsStack = ({longPlotEnabled, setLongPlotEnabled, navigation}) => {
        return (
            <Stack.Navigator initialRouteName='Settings'>
                <Stack.Screen name="Settings"
                options={{
                    headerStyle: {
                        backgroundColor: '#333',
                        shadowOpacity: .3,
                        shadowColor: '#000',
                        shadowOffset: {
                            height: 4,
                        },
                        shadowRadius: 2,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Back"
                            color="#fff"
                        />
                    )
                    }}
                >
                    {props => <SettingsScreen 
                    {...props} 
                    longPlotEnabled={longPlotEnabled} 
                    setLongPlotEnabled={setLongPlotEnabled}
                    />
                    }
                </Stack.Screen>
            </Stack.Navigator>
        );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsStack