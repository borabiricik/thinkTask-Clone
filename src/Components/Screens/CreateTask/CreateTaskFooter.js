import { Button, Container } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import generalStyles from "../../../Constants/Style"

const CreateTaskFooter = ({ navigation, navigationPage,nextPage }) => {
    return (
        <View style={styles.Container}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navigationPage)}>
                <Text style={[generalStyles.fontRegular, generalStyles.font24]}>Vazgeç</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={() => navigation.navigate(nextPage)}>
                <Text style={[generalStyles.fontBold, generalStyles.font24]}>Sonraki Adım</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CreateTaskFooter

const styles = StyleSheet.create({
    Container: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        height: "10%"
    },
    button: {
        padding: 15,
        borderRadius: 10
    },
    nextButton: {
        borderWidth: 1
    }
})
