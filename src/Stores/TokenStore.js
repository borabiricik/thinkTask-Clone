import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { action, makeObservable, observable, runInAction } from "mobx"
import { createContext } from "react"



class TokenStore {

    authToken = null


    constructor() {
        makeObservable(this, {
            authToken: observable,
            getToken: action
        })
    }

    getToken = () => {
         axios({
            method: "POST",
            url: "http://cloudapi.thinkwork.dijitalsahne.com/api/Auth/login",
            data: {
                "userName": "5386277351",
                "password": "Ds102278.!",
                "deviceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "language": "tr"
            }
        })
            .then(async response => {
                // axios.get("http://cloudapi.thinkwork.dijitalsahne.com/api/Task/GetDashboard", { headers: { Authorization: `Bearer ${response.data.result.auth_token}` } })
                //     .then(response => console.log(response))
                runInAction(()=>{
                    this.authToken= response.data.result.auth_token
                    AsyncStorage.setItem("@token",this.authToken)
                    
                })                  
            })

    }
}

export const TokenStoreContext = createContext(new TokenStore())