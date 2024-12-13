import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";
import Modal from "./Modal";
import LazyImage from "./LazyImage";
import Button from "./Button";
import NetInfo from "@react-native-community/netinfo";

const remote = require("./images/films.jpg");

const connectedMap = {
    none: "Disconnected",
    unknown: "Unknown",
    wifi: "Connected - Wifi",
    cell: "Connected - Cell",
    mobile: "Connected - Mobile",

};

export default function Films({ navigation }) {
    const [source, setSource] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [connected, setConnected] = useState("");

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        function onNetworkChange(connection) {
            setConnected(connectedMap[connection.type]);
        }

        const unsubscribe = NetInfo.addEventListener(onNetworkChange);

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <View style={styles.wrapper}>
            <View style={styles.connectionContainer}>
                <Text style={styles.connectionText}>{connected}</Text>
            </View>
            <Text style={styles.titleText}>Films Content</Text>
            <View style={styles.imageContainer}>
                <LazyImage
                    style={styles.image}
                    resizeMode="contain"
                    source={source}
                />
                <Button
                    label="Load Remote"
                    onPress={() => {
                        setSource(remote);
                    }}
                />
            </View>
            {/* Old Search Bar */}
            {/* <TextInput 
                style={styles.searchContainer}
                placeholder="Search:"
                value={searchInput}
                onChangeText={setSearchInput}
                onSubmitEditing={(e) => {
                    toggleModal();
                }}
            >
                
            </TextInput> */}

            <Modal
                visible={modalVisible}
                content={`Search for: ${searchInput}?`}
                onPressConfirm={toggleModal}
                onPressCancel={toggleModal}
            >
            </Modal>

            <ListContainer endpoint="Films" />

        </View>
    );
}