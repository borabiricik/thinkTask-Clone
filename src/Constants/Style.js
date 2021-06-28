import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, DARK_BLUE, PRIMARY_TEXT_COLOR } from "./Style/Colors";

module.exports = StyleSheet.create({

    headerTitle: {
        fontWeight: "bold",
        alignSelf: "center",
    },
    dashboardInfoText: {
        fontFamily: "Regular700",
        fontSize: 14,
        color: "#8B8B8B"
    },
    StatusView: {        
        flexDirection: "row",
        justifyContent: "space-evenly",       
        backgroundColor:"white",
        borderRadius:15
        
    },
    StatusViewSection: {
        height:Dimensions.get("screen").height/9,
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
        
    },
    shadowBox: {
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 0.01,
        elevation: 5,
        borderRadius:15,
        width: Dimensions.get("screen").width / 1.2
    },
    divider: {
        height: "100%",
        width: 1,
        backgroundColor: "#DDDDDD"
    },
    statusText: {
        fontFamily: "Regular",
        fontSize: 32,
        textAlign: "center"
    },
    tabViewContainer:{
        flex:1,
        backgroundColor:`${BACKGROUND_COLOR}`,
        alignItems:"center",
    },
    allTaskText:{
        color:`${DARK_BLUE}`,
        fontFamily:"Regular700"
    },
    sectionHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"82%"
    },
    taskListContainer: {
        backgroundColor:`${BACKGROUND_COLOR}`,
        flex: 1,
        paddingHorizontal:20
    },
    fontRegular:{
        fontFamily:"Regular"
    },
    fontBold:{
        fontFamily:"Regular700"
    },
    disabledTextColor:{
        color:"#999999"
    },
    primaryColor:{
        color:`${PRIMARY_TEXT_COLOR}`
    },
    font24:{
        fontSize:24
    },
    font16:{
        fontSize:16
    }


})