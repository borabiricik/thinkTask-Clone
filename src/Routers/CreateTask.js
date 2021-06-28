import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {  StyleSheet, } from 'react-native'
import JobInfo from '../Screens/Task/JobInfo'
import SelectJob from '../Screens/Task/SelectJob'
import SetJob from '../Screens/Task/SetJob'

const CreateTaskStack = () => {

    const createTaskNav = createStackNavigator()
    return (

        <createTaskNav.Navigator screenOptions={{headerShown:false}}>
            <createTaskNav.Screen name="SelectJob" component={SelectJob} />
            <createTaskNav.Screen name="SetJob" component={SetJob} />
            <createTaskNav.Screen name="JobInfo" component={JobInfo} />
        </createTaskNav.Navigator>
       
    )
}

export default CreateTaskStack

const styles = StyleSheet.create({})
