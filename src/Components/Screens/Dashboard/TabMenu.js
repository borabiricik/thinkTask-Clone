import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Container, Tab, Tabs } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BACKGROUND_COLOR, DARK_BLUE, PRIMARY_TEXT_COLOR } from '../../../Constants/Style/Colors'
import Day from './TabView/Day'
import Week from './TabView/Week'
import Month from './TabView/Month'

const TabMenu = ({ data }) => {

    const tabMenu = createMaterialTopTabNavigator()

    return (
        <tabMenu.Navigator
            style={styles.tabmenuContainer}
            tabBarOptions={{
                indicatorStyle: { height: "100%", backgroundColor: `${DARK_BLUE}` },
                activeTintColor: "white",
                inactiveTintColor: `${PRIMARY_TEXT_COLOR}`,
                style: { borderWidth: 1, margin: 20 },
                labelStyle: { fontFamily: "Regular700", backgroundColor: `${BACKGROUND_COLOR}` },
            }}
        >
            <tabMenu.Screen name="Gün" component={Day} />
            <tabMenu.Screen name="Hafta" component={Week} />
            <tabMenu.Screen name="Ay" component={Month} />
        </tabMenu.Navigator>



        // <Container style={styles.tabmenuContainer}>
        //     <Tabs
        //     tabBarUnderlineStyle={{height:"100%",zIndex:2}}
        //     >
        //         <Tab textStyle={{zIndex:100}}  heading="Tab1">
        //             <Text>asd</Text>
        //         </Tab>
        //         <Tab  heading="Tab2">
        //             <Text>asd</Text>
        //         </Tab>
        //         <Tab  heading="Tab3">
        //             <Text>asd</Text>
        //         </Tab>
        //     </Tabs>
        // </Container>



    )
}

export default TabMenu

const styles = StyleSheet.create({
    tabmenuContainer: {
        height: 30,
        backgroundColor: `${BACKGROUND_COLOR}`
    }
})
