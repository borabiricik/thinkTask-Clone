import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Dashboard from '../Screens/Main/Dashboard'
import Settings from '../Screens/Main/Settings'
import Tasklist from '../Screens/Main/Tasklist'
import TasklistPast from '../Screens/Main/TaskListPast'

const SwipeSwitchNav = () => {
    const swipeNav = createMaterialTopTabNavigator()
    return (
        <swipeNav.Navigator tabBarOptions={{style:{display:"none"}}} initialRouteName={"Dashboard"}>
            <swipeNav.Screen name="Settings" component={Settings} />
            <swipeNav.Screen name="Dashboard" component={Dashboard} />
            <swipeNav.Screen name="TaskList" component={Tasklist} />            
            <swipeNav.Screen name="TaskListPast" component={TasklistPast} />            
        </swipeNav.Navigator>
    )
}

export default SwipeSwitchNav

const styles = StyleSheet.create({})
