import { Switch } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import generalStyles from "../../Constants/Style"
import { PRIMARY_TEXT_COLOR } from '../../Constants/Style/Colors'

const SettingsView = () => {
    const [autoLoginSwitch, setautoLoginSwitch] = useState(false)
    const [rememberPasswordSwitch, setrememberPasswordSwitch] = useState(false)

    const toggleloginSwitch = () => {
        setautoLoginSwitch(!autoLoginSwitch)
    }

    const togglerememberSwitch = () => {
        setrememberPasswordSwitch(!rememberPasswordSwitch)
    }



    return (
        <View >
            <View style={styles.infoContainer}>
                <Text style={[generalStyles.fontBold, styles.name]}>Bora Biricik</Text>
                <Text style={[generalStyles.fontRegular, styles.department]}>Housekeeping</Text>
                <Text style={[generalStyles.fontRegular, styles.company]}>Rixos Sungate / Antalya</Text>
            </View>

            <TouchableOpacity onPress={toggleloginSwitch} style={styles.row}>
                <Text style={generalStyles.fontRegular}>Otomatik Giriş Yap</Text>
                <Switch
                    thumbColor={autoLoginSwitch ? "white" : "white"}
                    trackColor={{ true: "orange", false: "black" }}
                    value={autoLoginSwitch}
                    onValueChange={toggleloginSwitch} />
            </TouchableOpacity>

            <TouchableOpacity onPress={togglerememberSwitch} style={styles.row}>
                <Text style={generalStyles.fontRegular}>Şifremi Hatırla</Text>
                <Switch
                    thumbColor={autoLoginSwitch ? "white" : "white"}
                    trackColor={{ true: "orange", false: "black" }}
                    value={rememberPasswordSwitch}
                    onValueChange={togglerememberSwitch} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
                <Text style={generalStyles.fontRegular}>Şifre Değiştir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
                <Text style={generalStyles.fontRegular}>Oturumu Kapat</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SettingsView

const styles = StyleSheet.create({
    infoContainer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    name: {
        color: `${PRIMARY_TEXT_COLOR}`,
        fontSize: 16,

    },
    department: {
        fontSize: 12,
    },
    company: {
        fontSize: 10
    },
    row: {
        padding: 20,
        borderBottomWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "rgba(0, 0, 0, 0.2)"
    }

})
