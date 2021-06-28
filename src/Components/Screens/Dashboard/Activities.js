import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import generalStyle from "../../../Constants/Style"
import { PersonelStoreContext } from '../../../Stores/PersonelStore'

const Activities = () => {

    const personelStore = useContext(PersonelStoreContext)
    const [dashboard, setdashboard] = useState(null)
    const [totalTask, settotalTask] = useState(0)
    
    const getDashboard = async () => {
        await personelStore.getDashboard()
        setdashboard(JSON.parse(await AsyncStorage.getItem("@dashboard")))
    }


    useEffect(() => {
        getDashboard()

    }, [])

    useEffect(() => {
        if (dashboard != null) {
            dashboard.result.taskStatusList.forEach(task => { settotalTask(totalTask + task.taskTotal) })
        }
    }, [dashboard])

    return (
        <View style={generalStyle.shadowBox}>
            <View style={generalStyle.StatusView}>
                <View style={[generalStyle.StatusViewSection, { flexDirection: "row" }]}>
                    <View style={styles.chart}>
                        <Image source={require("../../../../assets/Icons/chartGreen.png")} />
                    </View>
                    <View>
                        <Text style={generalStyle.statusText}>{dashboard === null ? <ActivityIndicator size="large" /> : dashboard.result.taskStatusList.find((task) => task.id === "Started").taskTotal}</Text>
                        <Text style={generalStyle.dashboardInfoText}>AKTİF</Text>
                    </View>

                </View>

                <View style={generalStyle.divider}></View>

                <View style={[generalStyle.StatusViewSection, { flexDirection: "row" }]}>
                    <View style={styles.chart}>
                        <Image source={require("../../../../assets/Icons/chartOrange.png")} />
                    </View>
                    <View>
                        <Text style={generalStyle.statusText}>{totalTask}</Text>
                        <Text style={generalStyle.dashboardInfoText}>TOPLAM</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Activities

const styles = StyleSheet.create({
    
    chart: {
        justifyContent: "center",
        paddingTop: 10
    }
})
