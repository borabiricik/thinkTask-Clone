import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { createContext } from "react";
import { API_BASE } from "../Constants/API";



class PersonelStore {
    dashboard = []

    constructor() {
        makeObservable(this, {
            getDashboard: action,
            dashboard: observable
        })
    }

    getDashboard = async () => {

        axios.get(`${await API_BASE}Task/GetDashboard`, { headers: { Authorization: `Bearer ${await AsyncStorage.getItem("@token")}` } })
            .then(response => JSON.parse(response.request._response))
            .then(item => {
                runInAction(() => {
                    this.dashboard = item
                    AsyncStorage.setItem("@dashboard", JSON.stringify(item))
                })
            })

    }
}

export const personelStore = new PersonelStore()