import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";

export default function Films({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Films Content</Text>
            <ListContainer endpoint="Films" />
        </View>
    );
}