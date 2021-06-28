import { createStackNavigator } from '@react-navigation/stack'
import { Body, Button, Container, Header, Left, Right, Title } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SettingsView from '../../Components/Screens/SettingsView'
import generalStyles from "../../Constants/Style"
import { BACKGROUND_COLOR, DARK_BLUE } from '../../Constants/Style/Colors'


const Settings = () => {

    return (
        <Container style={{ backgroundColor: `${BACKGROUND_COLOR}` }}>
            <Header style={generalStyles.header} androidStatusBarColor={`${DARK_BLUE}`}>
                <Left style={{ flex: 1 }}>

                </Left>

                <Body style={{ flex: 3 }}>
                    <Title style={{ alignSelf: "center" }}>Ayarlar</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Image source={require("../../../assets/Logos/thinkTaskWhite.png")} />

                    </Button>
                </Right>
            </Header>
            
            <SettingsView />

        </Container>
    )
}

export default Settings

const styles = StyleSheet.create({})
