import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 5,
        alignItems: "center",

        
    },
    item: {
        margin: 5,
        padding: 5,
        color: "ghostwhite",
        backgroundColor: "slategray",
        textAlign: "center",
        borderWidth: .5,
        

    },
    filterText: {
        height: 20,
        width: 200,
        
    },
    controls: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 50,


    },
    text: {
        textAlign: "center",
    },
    
});