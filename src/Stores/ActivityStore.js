import axios from "axios"
import { makeObservable, observable } from "mobx"


class ActivityStore {
    activities = []
    constructor() {
        makeObservable(this, {
            activities: observable
        })
    }

    getActivities = () => {
        
    }


}