import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListComponents/ListContainer";

export default function Starships({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Starships Content</Text>
            <ListContainer endpoint="Starships" />
        </View>
    );
}