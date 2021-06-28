import { Radio } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import generalStyle from "../../../Constants/Style"

const SelectJobItem = ({data}) => {
    const [isRadioChecked, setisRadioChecked] = useState(false)
    return (
        <TouchableOpacity key={data.index} onPress={()=>setisRadioChecked(!isRadioChecked)} style={styles.container}>
            <Text style={[generalStyle.fontRegular]}>Job Title</Text>
            <Radio
            selected={isRadioChecked}
            />
        </TouchableOpacity>
    )
}

export default SelectJobItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.07)"
    }
})
