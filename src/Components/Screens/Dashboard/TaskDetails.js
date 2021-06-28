import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import generalStyle from "../../../Constants/Style"
import { PersonelStoreContext } from '../../../Stores/PersonelStore'

const TaskDetails = () => {

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
        <View style={styles.shadowBox}>


            <View style={generalStyle.StatusView}>


                <View style={generalStyle.StatusViewSection}>
                    <Text style={generalStyle.statusText}>{dashboard === null ? <ActivityIndicator size="large" /> : dashboard.result.taskStatusList.find((task) => task.id === "Started").taskTotal}</Text>
                    <Text style={generalStyle.dashboardInfoText}>Gecikmiş</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 10, height: 10, marginRight: 2 }} source={require("../../../../assets/Icons/warning-icon.png")} />
                        <Text style={generalStyle.dashboardInfoText}>{dashboard === null ? <ActivityIndicator size="large" /> : dashboard.result.taskStatusList.find((task) => task.id === "Started").taskTotal} <Text style={{ color: "black" }}>Acil</Text></Text>
                    </View>
                </View>

                <View style={generalStyle.divider}></View>

                <View style={generalStyle.StatusViewSection}>
                    <Text style={generalStyle.statusText}>{totalTask}</Text>
                    <Text style={[generalStyle.dashboardInfoText]}>Atanmayı Bekleyen</Text>

                </View>
            </View>
        </View>
    )
}

export default TaskDetails

const styles = StyleSheet.create({
    shadowBox: {
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 0.01,
        elevation: 5,
        borderRadius: 15,
        width: Dimensions.get("screen").width / 1.2
    },
    chart: {
        width: 30,
        justifyContent: "center",
        paddingTop: 10
    }
})
