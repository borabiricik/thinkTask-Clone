import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import generalStyles from "../../../Constants/Style"
import { BACKGROUND_COLOR } from '../../../Constants/Style/Colors'

const CreateTaskHeader = ({ header1="Yeni Görev Ekle", header2="Ekle", isrequired=false }) => {
    return (
        <View style={{ backgroundColor: `${BACKGROUND_COLOR}`, opacity: 1 }}>
            <Text style={[generalStyles.fontBold, generalStyles.primaryColor, generalStyles.font16]}>{header1}</Text>
            <Text style={[generalStyles.fontBold, generalStyles.disabledTextColor, generalStyles.font24]}>{header2}</Text>
            {
                isrequired && <Text style={[generalStyles.fontRegular, {color:"orange",paddingTop:20}, generalStyles.font16]}>Görev Zorunluluğu Ekle</Text>
            }
            
        </View>
    )
}

export default CreateTaskHeader

const styles = StyleSheet.create({

})
