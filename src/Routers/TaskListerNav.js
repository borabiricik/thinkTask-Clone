import React from 'react'
import { StyleSheet, } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { BACKGROUND_COLOR, DARK_BLUE } from '../Constants/Style/Colors'
import OnGoing from '../Components/Screens/Tasklist/OnGoing'
import Cancelled from '../Components/Screens/Tasklist/Cancelled'
import Completed from '../Components/Screens/Tasklist/Completed'
import Past from '../Components/Screens/Tasklist/Past'
import Waiting from "../Components/Screens/Tasklist/Waiting"

const TaskListerNav = ({variant}) => {
    const taskList = createMaterialTopTabNavigator()
    if(variant==="past")
    {
        return (
            <taskList.Navigator tabBarOptions={{
                indicatorStyle: { height: "100%", borderRadius: 50, backgroundColor: `${DARK_BLUE}` },
                activeTintColor: "white",
                inactiveTintColor: "black",
                style: { margin: 20, borderRadius: 50, elevation: 0,backgroundColor:`${BACKGROUND_COLOR}` },
                labelStyle: { fontFamily: "Regular700", fontSize: 12 },
            }}>
                <taskList.Screen name={"Gecikmiş"} component={Past} />                
                <taskList.Screen name={"Atanmayı Bekleyen"} component={Waiting} />
            </taskList.Navigator>
        )
    }
    return (
        <taskList.Navigator tabBarOptions={{
            indicatorStyle: { height: "100%", borderRadius: 50, backgroundColor: `${DARK_BLUE}` },
            activeTintColor: "white",
            inactiveTintColor: "black",
            style: { margin: 20, borderRadius: 50, elevation: 0,backgroundColor:`${BACKGROUND_COLOR}` },
            labelStyle: { fontFamily: "Regular700", fontSize: 12 },
        }}>
            <taskList.Screen name={"Devam Eden"} component={OnGoing} />
            <taskList.Screen name={"Tamamlanan"} component={Completed} />
            <taskList.Screen name={"İptal"} component={Cancelled} />
        </taskList.Navigator>
    )
}

export default TaskListerNav

const styles = StyleSheet.create({
})
