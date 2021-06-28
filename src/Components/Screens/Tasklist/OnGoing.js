import AsyncStorage from '@react-native-async-storage/async-storage'
import { toJS } from 'mobx'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import generalStyles from "../../../Constants/Style"
import { TaskStoreContext } from '../../../Stores/TaskStore'
import TaskListItem from "../Tasklist/TaskListItem"



const OnGoing = () => {
    const taskStore = useContext(TaskStoreContext)
    const [tasks, settasks] = useState(null)

    const getTaskList = async () => {
        await taskStore.getTaskList()
        settasks(toJS(JSON.parse(await AsyncStorage.getItem("@taskList"))));
    }

    useEffect(() => {
        getTaskList()
    }, [])

    return (
        <View style={generalStyles.taskListContainer}>
            <FlatList
                data={tasks === null ? null : tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TaskListItem data={item} status={"devam"} />}

            />
        </View>
    )
}

export default OnGoing

const styles = StyleSheet.create({
    taskListContainer: {

        flex: 1
    }
})
