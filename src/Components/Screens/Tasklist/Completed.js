import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import generalStyles from "../../../Constants/Style"
import TaskListItem from "../Tasklist/TaskListItem"



const Completed = () => {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    return (
        <View style={generalStyles.taskListContainer}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={item => <TaskListItem data={item} status={"completed"} />}
                
            />
        </View>
    )
}

export default Completed

const styles = StyleSheet.create({
    taskListContainer: {
        
        flex: 1
    }
})
