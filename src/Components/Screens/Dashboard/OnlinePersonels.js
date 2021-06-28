import AsyncStorage from '@react-native-async-storage/async-storage'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import generalStyle from "../../../Constants/Style"
import { PersonelStoreContext } from '../../../Stores/PersonelStore'

const OnlinePersonels = ({data}) => {
    // const [dashboard, setdashboard] = useState(null)

    // const personelStore = useContext(PersonelStoreContext)
    // const getDashboard = async () => {
    //     await personelStore.getDashboard()
    //     setdashboard(JSON.parse(await AsyncStorage.getItem("@dashboard")))
    // }


    // useEffect(() => {
    //     getDashboard()
    // }, [])


    return (
        data === null ?
            <View><Text>Yükleniyor</Text></View>
            :
            <>
                <View style={generalStyle.shadowBox}>


                    <View style={generalStyle.StatusView}>

                        <View style={generalStyle.StatusViewSection}>
                            <Text style={generalStyle.statusText}>{data.result.activePersonnelCount}</Text>
                            <Text>Personel <Text style={{ color: "#80d600", fontFamily: "Regular700" }}>Online</Text></Text>
                        </View>

                        <View style={generalStyle.divider}></View>

                        <View style={generalStyle.StatusViewSection}>
                            <Text style={generalStyle.statusText}>{data.result.passivePersonnelCount}</Text>
                            <Text>Personel <Text style={{ color: "#ff3333", fontFamily: "Regular700" }}>Offline</Text></Text>
                        </View>
                    </View>
                </View>
            </>
    )
}

export default observer(OnlinePersonels)

const styles = StyleSheet.create({
})
