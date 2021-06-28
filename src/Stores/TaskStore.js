import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import { API_BASE } from "../Constants/API";


class TaskStore {
    taskList = []


    constructor() {
        makeObservable(this, {
            taskList: observable
        })
    }

    getTaskList = async () => {
        axios.get(`${API_BASE}Task/GetTaskActivtyList`,{headers: {Authorization : `Bearer ${await AsyncStorage.getItem("@token")}`}})
        .then(response=>{
            runInAction(()=>{
                this.taskList = response.data.result
                AsyncStorage.setItem("@taskList",JSON.stringify(this.taskList))
            })

        })
    }
}

export const TaskStoreContext = createContext(new TaskStore())