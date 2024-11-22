import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";
import Modal from "./Modal.js";

export default function Films({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    function toggleModal() {
        setModalVisible(!modalVisible);
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Films Content</Text>
            <TextInput 
                style={styles.searchContainer}
                placeholder="Search:"
                value={searchInput}
                onChangeText={setSearchInput}
                onSubmitEditing={(e) => {
                    toggleModal();
                }}
            >
                
            </TextInput>

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