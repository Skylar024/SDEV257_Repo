import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 5,
        alignItems: "center",

        
    },
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "ghostwhite",
        
    },
    connectionContainer: {
        width: 300,
        backgroundColor: "#97a2ae",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    connectionText: {
        color: "lightgreen",
        textAlign: "center",

    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        
    },
    scroll: {
        height: 1,
        alignSelf: "stretch",
        
    },
    swipeContainer: {
        flex: 1,
        flexDirection: "row",
        width: 200,
        height: 30,
        marginTop: 30,
    },

    swipeItem: {
        width: 200,
        height: 30,
        backgroundColor: "slategray",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "slategrey",
    },
    
    swipeItemText: {
        textAlign: "center",
        color: "ghostwhite",
    },
    item: {
        margin: 5,
        padding: 5,
        color: "ghostwhite",
        backgroundColor: "slategray",
        textAlign: "center",
        borderWidth: .5,
        alignSelf: "center",
        width: 200,

    },
    
    swipeBlank: {
        width: 200,
        height: 30,
    },
    image: {
        width: 300, 
        height: 150,
    },
    imageContainer: {
        // backgroundColor: "black",

    },
    button: {
        padding: 10,
        margin: 5,
        backgroundColor: "azure",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "slategrey",
    },
    modalContainer: {
        position: "absolute",
        top: 300,
        left: 115,
        zIndex: 100,
        width: 200,
        height: 100,
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
    filterText: {
        height: 20,
        width: 200,
        textAlign: "center",
        
        
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
    titleText: {
        textAlign: "center",
        color: "ghostwhite",
        width: 200,
        backgroundColor: "slategray",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    buttonText: {
        color: "slategray",
    },
    
});