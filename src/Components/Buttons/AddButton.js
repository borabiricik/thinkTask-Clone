import { Fab } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DARK_BLUE } from '../../Constants/Style/Colors'

const AddButton = ({navigation}) => {
    const onPress = () =>{
        navigation.navigate("CreateTask")
    }

    return (
        <View style={{ flex: 0.000001 }}>
            <Fab
                direction="up"
                style={{ backgroundColor: `${DARK_BLUE}` }}
                position="bottomRight"
                onPress={onPress}
                >
                <Text>+</Text>
            </Fab>
        </View>
    )
}

export default AddButton

const styles = StyleSheet.create({})
