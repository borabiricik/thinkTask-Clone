
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MonthController } from '../../../Constants/Functions/MonthReturner'
import generalStyles from "../../../Constants/Style"
import { DISABLED_TEXT_COLOR, PRIMARY_TEXT_COLOR } from '../../../Constants/Style/Colors'

const TaskListItem = ({ data, status }) => {

    const [date, setdate] = useState(data.taskDate !== undefined && data.taskDate !== null ? data.createDate.slice(8, 10) : 0)
    const [department, setdepartment] = useState(data.organizationName !== undefined && data.organizationName !== null ? data.organizationName : "Departman Bilgisi Bulunamadı")
    const [month, setMonth] = useState(data.taskDate !== undefined && data.taskDate !== null ? MonthController(data.createDate.slice(5, 7)) : "AY")
    const [personnelName, setpersonnelName] = useState(data.personnelName !== undefined && data.personnelName !== null ? data.personnelName : "Full Name")
    const [taskNote, settaskNote] = useState(data.taskNote !== undefined && data.taskNote !== null && data.taskNote !== "" ? data.taskNote : "Description")
    

    useEffect(() => {
        
    }, [])

    if (status === "completed") {
        return (
            <View key={data.index} style={styles.TaskListItemContainer}>
                <View style={styles.date}>
                    <View>
                        <Text style={[generalStyles.fontBold, styles.dateDay, generalStyles.primaryColor]}>24</Text>
                        <Text style={[generalStyles.fontRegular, styles.dateMonth]}>NİSAN</Text>
                    </View>
                    <Text style={[generalStyles.fontBold, styles.dateTime]}>14:18</Text>

                </View>

                <View style={styles.info}>
                    <Text style={[generalStyles.fontRegular, styles.department]} >Elektrik Departmanı</Text>
                    <Text style={[generalStyles.fontBold, styles.fullName, generalStyles.primaryColor]}>Kubilay Can</Text>
                    <Text style={[generalStyles.fontRegular, styles.description]}>“Genel müdür odasındaki spot değişecek ve çok acil”</Text>
                </View>



                <View style={styles.status}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <Text style={[generalStyles.fontRegular, styles.statusText]}>Tamamlandı</Text>
                    </View>
                </View>
            </View>
        )
    }

    else if (status === "devam") {
        return (
            <View key={data.index} style={styles.TaskListItemContainer}>
                <View style={styles.date}>
                    <View>
                        <Text style={[generalStyles.fontBold, styles.dateDay, generalStyles.primaryColor]}>{date}</Text>
                        <Text style={[generalStyles.fontRegular, styles.dateMonth]}>{month}</Text>
                    </View>
                    <Text style={[generalStyles.fontBold, styles.dateTime]}>14:18</Text>

                </View>

                <View style={styles.info}>
                    <Text style={[generalStyles.fontRegular, styles.department]} >{department}</Text>
                    <Text style={[generalStyles.fontBold, styles.fullName, generalStyles.primaryColor]}>{personnelName}</Text>
                    <Text style={[generalStyles.fontRegular, styles.description]}>{taskNote}</Text>
                </View>



                <View style={styles.status}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../../../../assets/Icons/loadYellow.png")} />
                        <Text style={[generalStyles.fontRegular, styles.statusText]}>Sürüyor</Text>
                    </View>
                </View>
            </View>
        )
    }

    else if (status === "cancelled") {
        return (
            <View key={data.index} style={styles.TaskListItemContainer}>
                <View style={styles.date}>
                    <View>
                        <Text style={[generalStyles.fontBold, styles.dateDay, generalStyles.primaryColor]}>24</Text>
                        <Text style={[generalStyles.fontRegular, styles.dateMonth]}>NİSAN</Text>
                    </View>
                    <Text style={[generalStyles.fontBold, styles.dateTime]}>14:18</Text>

                </View>

                <View style={styles.info}>
                    <Text style={[generalStyles.fontRegular, styles.department]} >Elektrik Departmanı</Text>
                    <Text style={[generalStyles.fontBold, styles.fullName, generalStyles.primaryColor]}>Kubilay Can</Text>
                    <Text style={[generalStyles.fontRegular, styles.description]}>“Genel müdür odasındaki spot değişecek ve çok acil”</Text>
                </View>



                <View style={styles.status}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={[generalStyles.fontRegular, styles.statusText]}>İptal</Text>
                    </View>
                </View>
            </View>
        )
    }

    else if (status === "past") {
        return (
            <View key={data.index} style={styles.TaskListItemContainer}>
                <View style={styles.date}>
                    <View>
                        <Text style={[generalStyles.fontBold, styles.dateDay, generalStyles.primaryColor]}>24</Text>
                        <Text style={[generalStyles.fontRegular, styles.dateMonth]}>NİSAN</Text>
                    </View>
                    <Text style={[generalStyles.fontBold, styles.dateTime]}>14:18</Text>

                </View>

                <View style={styles.info}>
                    <Text style={[generalStyles.fontRegular, styles.department]} >Elektrik Departmanı</Text>
                    <Text style={[generalStyles.fontBold, styles.fullName, generalStyles.primaryColor]}>Kubilay Can</Text>
                    <Text style={[generalStyles.fontRegular, styles.description]}>“Genel müdür odasındaki spot değişecek ve çok acil”</Text>
                </View>



                <View style={styles.status}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 15, height: 15 }} source={require("../../../../assets/Icons/warning-icon.png")} />
                        <Text style={[generalStyles.fontRegular, styles.statusText]}>Acil</Text>
                    </View>
                </View>
            </View>
        )
    }

    else if (status === "waiting") {
        return (
            <View key={data.index} style={styles.TaskListItemContainer}>
                <View style={styles.date}>
                    <View>
                        <Text style={[generalStyles.fontBold, styles.dateDay, generalStyles.primaryColor]}>24</Text>
                        <Text style={[generalStyles.fontRegular, styles.dateMonth]}>NİSAN</Text>
                    </View>
                    <Text style={[generalStyles.fontBold, styles.dateTime]}>14:18</Text>

                </View>

                <View style={styles.info}>
                    <Text style={[generalStyles.fontRegular, styles.department]} >Elektrik Departmanı</Text>
                    <Text style={[generalStyles.fontBold, styles.fullName, generalStyles.primaryColor]}>Kubilay Can</Text>
                    <Text style={[generalStyles.fontRegular, styles.description]}>“Genel müdür odasındaki spot değişecek ve çok acil”</Text>
                </View>



                <View style={styles.status}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={[generalStyles.fontRegular, styles.statusText]}>Beklemede</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <Text key={data.index}>No data</Text>
    )









}

export default TaskListItem

const styles = StyleSheet.create({
    TaskListItemContainer: {
        padding: 20,
        height: 125,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        backgroundColor: "white",
        elevation: 1,
        borderRadius: 10
    },
    date: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    info: {
        width: "60%"
    },
    status: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    statusText: {
        color: `${DISABLED_TEXT_COLOR}`,
        fontSize: 12
    },
    dateDay: {
        fontSize: 16,
        textAlign: "center"
    },
    dateMonth: {
        fontSize: 12,
        textAlign: "center",
        color: `${DISABLED_TEXT_COLOR}`
    },
    dateTime: {
        color: `${DISABLED_TEXT_COLOR}`,
        fontSize: 14,
        marginBottom: 10
    },
    department: {
        color: `${DISABLED_TEXT_COLOR}`,
        fontSize: 10,
    },
    fullName: {
        color: `${PRIMARY_TEXT_COLOR}`,
    },
    description: {
        marginTop: 10
    }
})
