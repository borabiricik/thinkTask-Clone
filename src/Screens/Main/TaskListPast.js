import { Body, Button, Container, Header, Left, Right, StyleProvider, Title } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import generalStyles from "../../Constants/Style"
import { BACKGROUND_COLOR, DARK_BLUE } from '../../Constants/Style/Colors'
import TaskListerNav from '../../Routers/TaskListerNav'
import getTheme from "../../../native-base-theme/components"
import material from '../../../native-base-theme/variables/material'
import AddButton from "../../Components/Buttons/AddButton"

const TasklistPast = ({navigation}) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={{backgroundColor:`${BACKGROUND_COLOR}`}}>
                <Header style={generalStyles.header} androidStatusBarColor={`${DARK_BLUE}`}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={()=>navigation.navigate("TaskList")}>
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

                <TaskListerNav variant={"past"} />

                <AddButton navigation={navigation} />
            </Container>
        </StyleProvider>
    )
}

export default TasklistPast

const styles = StyleSheet.create({})
