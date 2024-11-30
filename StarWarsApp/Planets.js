import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";
import Modal from "./Modal.js";
import LazyImage from "./LazyImage.js";
import Button from "./Button.js";

const remote = require("./images/planets.jpg");

export default function Planets({ navigation }) {
    const [items, setItems] = useState();
    const [source, setSource] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    function toggleModal() {
        setModalVisible(!modalVisible);
    }
    


    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Planets Content</Text>
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
            />
            
            <ListContainer endpoint="Planets" />

           
        </View>
    );
}