import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import CreateTaskFooter from '../../Components/Screens/CreateTask/CreateTaskFooter'
import CreateTaskHeader from '../../Components/Screens/CreateTask/CreateTaskHeader'
import SelectJobItem from '../../Components/Screens/CreateTask/SelectJobItem'

const SelectJob = ({navigation}) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
         <View style={{ padding: 40 }}>
            <CreateTaskHeader header1={"Yeni Görev Ekle"} header2={"Görev Seçimi"}  />
            <FlatList
                data={data}
                keyExtractor={item => item.toString()}
                renderItem={(item) => <SelectJobItem data={item} />}
                style={{height:Dimensions.get("screen").height/1.5,marginVertical:20}}
            />
            <CreateTaskFooter navigation={navigation} navigationPage={"Dashboard"} nextPage={"SetJob"} />
        </View>
    )
}

export default SelectJob

const styles = StyleSheet.create({})
