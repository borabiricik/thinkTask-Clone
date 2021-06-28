import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import generalStyles from "../../../../Constants/Style"
import { BACKGROUND_COLOR } from '../../../../Constants/Style/Colors'
import Activities from '../Activities'
import OnlinePersonels from '../OnlinePersonels'
import TaskDetails from '../TaskDetails'

const Day = () => {


    

    return (
        <View style={generalStyles.tabViewContainer}>
            <View style={styles.sectionHeader}>
                <Text style={generalStyles.dashboardInfoText}>AKTİVİTELER</Text>
                <TouchableOpacity>
                    <Text style={generalStyles.allTaskText}>TÜM GÖREVLER</Text>
                </TouchableOpacity>
            </View>
            <Activities />
            <View style={styles.sectionHeader}>
                <Text style={generalStyles.dashboardInfoText}>GÖREV DETAYLARI</Text>
            </View>
            <TaskDetails />
        </View>
    )
}

export default Day

const styles = StyleSheet.create({
    sectionHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"82%",
        
    },
})
