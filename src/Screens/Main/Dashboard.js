import { useFonts } from '@expo-google-fonts/inter'
import { loadAsync } from 'expo-font'
import { Body, Button, Container, Fab, Header, Left, Right, StyleProvider, Title } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import material from '../../../native-base-theme/variables/material'
import getTheme from "../../../native-base-theme/components"
import generalStyles from "../../Constants/Style"
import { BACKGROUND_COLOR, DARK_BLUE } from '../../Constants/Style/Colors'
import OnlinePersonels from '../../Components/Screens/Dashboard/OnlinePersonels'
import TabMenu from '../../Components/Screens/Dashboard/TabMenu'
import AddButton from '../../Components/Buttons/AddButton'
import { PersonelStoreContext } from '../../Stores/PersonelStore'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Dashboard = ({navigation}) => {
    const personelStore = useContext(PersonelStoreContext)

    const [isReady, setisReady] = useState(false)
    const [dashboard, setdashboard] = useState(null)

    const [loaded] = useFonts({
        Regular: require("../../../assets/Fonts/OpenSans-BoldItalic.ttf")
    })

    

    
    const getDashboard = async () => {
        await personelStore.getDashboard()
        setdashboard(JSON.parse(await AsyncStorage.getItem("@dashboard")))
    }


    useEffect(() => {
        getDashboard()
    }, [])
    

    return (
        loaded &&
        <StyleProvider style={getTheme(material)}>
            <Container style={{backgroundColor:`${BACKGROUND_COLOR}`}}>
                <Header style={generalStyles.header}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={()=>navigation.navigate("Settings")}>
                            <Image source={require("../../../assets/HeaderAssets/hamburger.png")} />

                        </Button>
                    </Left>

                    <Body style={{ flex: 3 }}>
                        <Title style={{ alignSelf: "center" }}>
                            Dashboard
                        </Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Image source={require("../../../assets/Logos/thinkTaskWhite.png")} />

                        </Button>
                    </Right>
                </Header>
                
                <View style={[styles.dashboardSection, styles.sectionwithDivider]}>
                    <Text style={generalStyles.dashboardInfoText}>ANLIK PERSONEL RAKAMLARI</Text>
                    <View style={styles.personelContainer}>
                        {
                            dashboard === null ? <ActivityIndicator size={"large"} />
                            : <OnlinePersonels data={dashboard} />
                        }
                    </View>

                </View>

                {
                            dashboard === null ? <ActivityIndicator size={"large"} />
                            : <TabMenu data={dashboard} />
                }

                <AddButton navigation={navigation} />
            </Container>
        </StyleProvider>
    )
}

export default observer(Dashboard)

const styles = StyleSheet.create({
    dashboardSection: {
        paddingHorizontal: 35,
        paddingVertical: 15

    },
    sectionwithDivider: {
        borderBottomWidth: 1,
        borderColor: "#afafaf",

    },
    personelContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})
