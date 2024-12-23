import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "ghostwhite",
        ...Platform.select({
            ios: { paddingTop: 40 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },
    box: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",

    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "stretch",
    },
    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "stretch",

    },
});