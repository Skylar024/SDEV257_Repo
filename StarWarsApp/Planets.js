import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";

export default function Planets({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Planets Content</Text>
            <ListContainer endpoint="Planets" />
        </View>
    );
}