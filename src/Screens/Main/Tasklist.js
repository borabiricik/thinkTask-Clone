import { Body, Button, Container, Header, Left, Right, StyleProvider, Title } from 'native-base'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import generalStyles from "../../Constants/Style"
import { BACKGROUND_COLOR, DARK_BLUE } from '../../Constants/Style/Colors'
import TaskListerNav from '../../Routers/TaskListerNav'
import getTheme from "../../../native-base-theme/components"
import material from '../../../native-base-theme/variables/material'
import AddButton from "../../Components/Buttons/AddButton"
import { useContext, useState } from 'react/cjs/react.development'
import { TaskStoreContext } from '../../Stores/TaskStore'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tasklist = ({ navigation }) => {

   

    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={{ backgroundColor: `${BACKGROUND_COLOR}` }}>
                <Header style={generalStyles.header} androidStatusBarColor={`${DARK_BLUE}`}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => navigation.navigate("Dashboard")}>
                            <Image source={require("../../../assets/HeaderAssets/LeftWhiteArrow.png")} />

                        </Button>
                    </Left>

                    <Body style={{ flex: 3 }}>
                        <Title style={{ alignSelf: "center" }}>Görev Listesi</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Image source={require("../../../assets/Logos/thinkTaskWhite.png")} />

                        </Button>
                    </Right>
                </Header>

                <TaskListerNav/>
                <AddButton navigation={navigation} />
            </Container>
        </StyleProvider>
    )
}

export default observer(Tasklist)

const styles = StyleSheet.create({})
