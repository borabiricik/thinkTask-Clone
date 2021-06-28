import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import generalStyles from "../../../../Constants/Style"
import Activities from '../Activities'
import TaskDetails from '../TaskDetails'

const Month = () => {
    return (
        <View style={generalStyles.tabViewContainer}>
            <View style={generalStyles.sectionHeader}>
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

export default Month

const styles = StyleSheet.create({})
