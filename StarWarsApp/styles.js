import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 5,
        alignItems: "center",

        
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalText: {
        fontSize: 16,
        margin: 5,
        color: "slategrey",
    },
    modalButton: {
        fontWeight: "bold",
        margin: 5,
        color: "slategray",
    },
    modalInner: {
        backgroundColor: "azure",
        padding: 20,
        borderWidth: 1,
        borderColor: "lightsteelblue",
        borderRadius: 2,
        alignItems: "center",
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 50,
        maxHeight: 50,
        width: 150,
        textAlign: "center",
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
    //Temporarily Hidden
    // controls: {
    //     flex: 1,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     backgroundColor: "white",
    //     padding: 10,
    //     marginTop: 10,
    //     borderWidth: 1,
    //     borderRadius: 50,


    // },
    text: {
        textAlign: "center",
    },
    
});