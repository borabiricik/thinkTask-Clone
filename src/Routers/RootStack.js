import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from '../Screens/LoginScreen'
import SwipeSwitchNav from './SwipeSwitchNav'
import CreateTaskStack from './CreateTask'

const RootStack = () => {
    const rootStack = createStackNavigator()
    const [isLogged, setisLogged] = useState(true)

    return (
        <NavigationContainer>
            <rootStack.Navigator initialRouteName={LoginScreen} screenOptions={{headerShown:false}}>

                {
                    isLogged ? 
                    (<>
                    <rootStack.Screen name="MainRouter" component={SwipeSwitchNav} />
                    <rootStack.Screen name="CreateTask" component={CreateTaskStack} />
                    </>)
                        : <rootStack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                        />
                }

            </rootStack.Navigator>
        </NavigationContainer>

    )
}

export default RootStack

const styles = StyleSheet.create({})
